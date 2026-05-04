'use client';

import { useEffect, useMemo, useState } from 'react';
import { treatments as defaultTreatmentsData, treatmentTypes } from '@/data/treatments';
import { ADMIN_PASSWORD, ADMIN_USERNAME } from '@/lib/admin-auth';

export type Treatment = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  type: string;
  imageSeed: string;
};

export type TreatmentsStore = {
  categories: string[];
  treatments: Treatment[];
};

export type StoreSaveResult = {
  ok: boolean;
  mode: 'remote' | 'local';
  message: string;
};

const STORAGE_KEY = 'celebrity-glow.treatments.v2';
const STORE_UPDATED_EVENT = 'treatments-store-updated';
const REMOTE_LOAD_URL = '/api/load-treatments.php';
const REMOTE_SAVE_URL = '/api/save-treatments.php';

async function extractRemoteError(response: Response) {
  const contentType = response.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    try {
      const data = await response.json();
      if (data && typeof data.message === 'string' && data.message.trim()) {
        return data.message.trim();
      }
    } catch {
      return `Remote endpoint returned invalid JSON (HTTP ${response.status}).`;
    }
  }

  try {
    const text = (await response.text()).trim();
    if (text) {
      return `Remote endpoint returned non-JSON output (HTTP ${response.status}): ${text.slice(0, 140)}`;
    }
  } catch {
    return `Remote endpoint failed with HTTP ${response.status}.`;
  }

  return `Remote endpoint failed with HTTP ${response.status}.`;
}

const defaultCategories = Array.from(
  new Set([
    ...treatmentTypes.filter((type) => type !== 'ALL'),
    ...defaultTreatmentsData.map((item) => item.type),
  ])
);

const defaultStore: TreatmentsStore = {
  categories: defaultCategories,
  treatments: defaultTreatmentsData,
};

function normalizeStore(input: Partial<TreatmentsStore> | null | undefined): TreatmentsStore {
  if (!input) {
    return defaultStore;
  }

  const categories = Array.isArray(input.categories)
    ? input.categories.filter((item) => typeof item === 'string' && item.trim().length > 0)
    : defaultCategories;

  const treatments = Array.isArray(input.treatments)
    ? input.treatments.filter((item): item is Treatment => {
      return Boolean(
        item &&
          typeof item.id === 'string' &&
          typeof item.title === 'string' &&
          typeof item.description === 'string' &&
          typeof item.detailedDescription === 'string' &&
          Array.isArray(item.benefits) &&
          typeof item.type === 'string' &&
          typeof item.imageSeed === 'string'
      );
    })
    : defaultTreatmentsData;

  const mergedCategories = Array.from(new Set([...categories, ...treatments.map((item) => item.type)])).filter(Boolean);

  return {
    categories: mergedCategories.length ? mergedCategories : defaultCategories,
    treatments: treatments.length ? treatments : defaultTreatmentsData,
  };
}

export function loadTreatmentsStore(): TreatmentsStore {
  if (typeof window === 'undefined') {
    return defaultStore;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultStore;
    }

    return normalizeStore(JSON.parse(raw));
  } catch {
    return defaultStore;
  }
}

function persistLocalTreatmentsStore(nextStore: TreatmentsStore) {
  if (typeof window === 'undefined') {
    return;
  }

  const normalized = normalizeStore(nextStore);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event(STORE_UPDATED_EVENT));
}

async function loadRemoteTreatmentsStore(): Promise<TreatmentsStore | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const response = await fetch(`${REMOTE_LOAD_URL}?ts=${Date.now()}`, {
      cache: 'no-store',
    });
    const contentType = response.headers.get('content-type') ?? '';

    if (!response.ok || !contentType.includes('application/json')) {
      return null;
    }

    const data = normalizeStore(await response.json());
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch {
    return null;
  }
}

export async function saveTreatmentsStore(nextStore: TreatmentsStore): Promise<StoreSaveResult> {
  if (typeof window === 'undefined') {
    return {
      ok: false,
      mode: 'local',
      message: 'Treatments cannot be saved outside the browser.',
    };
  }

  const normalized = normalizeStore(nextStore);
  persistLocalTreatmentsStore(normalized);

  try {
    const response = await fetch(REMOTE_SAVE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: ADMIN_USERNAME,
        password: ADMIN_PASSWORD,
        payload: normalized,
      }),
    });
    const contentType = response.headers.get('content-type') ?? '';

    if (!response.ok) {
      const remoteMessage = await extractRemoteError(response);
      return {
        ok: true,
        mode: 'local',
        message: `Saved in this browser only. ${remoteMessage}`,
      };
    }

    if (!contentType.includes('application/json')) {
      return {
        ok: true,
        mode: 'local',
        message: 'Saved in this browser only. PHP endpoint did not return JSON. Check whether PHP is enabled for /api/*.php on cPanel.',
      };
    }

    const payload = await response.json();
    return {
      ok: true,
      mode: 'remote',
      message:
        payload && typeof payload.message === 'string' && payload.message.trim()
          ? payload.message.trim()
          : 'Treatment changes published to the live site.',
    };
  } catch (error) {
    return {
      ok: true,
      mode: 'local',
      message: `Saved in this browser only. Live sync failed: ${error instanceof Error ? error.message : 'unknown error'}`,
    };
  }
}

export function resetTreatmentsStore() {
  return saveTreatmentsStore(defaultStore);
}

export function useTreatmentsStore() {
  const [store, setStore] = useState<TreatmentsStore>(defaultStore);

  useEffect(() => {
    const refreshLocal = () => setStore(loadTreatmentsStore());
    const refreshRemote = async () => {
      const remote = await loadRemoteTreatmentsStore();
      if (remote) {
        setStore(remote);
        return;
      }

      refreshLocal();
    };
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        void refreshRemote();
      }
    };

    refreshLocal();
    void refreshRemote();
    window.addEventListener(STORE_UPDATED_EVENT, refreshLocal);
    window.addEventListener('storage', refreshLocal);
    window.addEventListener('focus', refreshRemote);
    document.addEventListener('visibilitychange', handleVisibility);

    const intervalId = window.setInterval(() => {
      void refreshRemote();
    }, 15000);

    return () => {
      window.removeEventListener(STORE_UPDATED_EVENT, refreshLocal);
      window.removeEventListener('storage', refreshLocal);
      window.removeEventListener('focus', refreshRemote);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.clearInterval(intervalId);
    };
  }, []);

  const categories = useMemo(() => ['ALL', ...store.categories], [store.categories]);

  return {
    store,
    categories,
    setStore: (nextStore: TreatmentsStore) => saveTreatmentsStore(nextStore),
    resetStore: resetTreatmentsStore,
  };
}
