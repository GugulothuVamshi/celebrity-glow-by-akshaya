'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Pencil, Plus, Trash2, Upload } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Treatment, useTreatmentsStore } from '@/lib/treatments-store';
import { SiteContentStore, useSiteContentStore } from '@/lib/site-content-store';
import { useRouter } from 'next/navigation';
import { clearAdminAuthenticated, isAdminAuthenticated } from '@/lib/admin-auth';

type TreatmentForm = {
  id: string;
  title: string;
  type: string;
  description: string;
  detailedDescription: string;
  imageSeed: string;
  benefitsText: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function emptyForm(defaultCategory: string): TreatmentForm {
  return {
    id: '',
    title: '',
    type: defaultCategory,
    description: '',
    detailedDescription: '',
    imageSeed: '',
    benefitsText: '',
  };
}

export default function AdminPage() {
  const router = useRouter();
  const { store, setStore, resetStore } = useTreatmentsStore();
  const {
    store: siteStore,
    setStore: setSiteStore,
    resetStore: resetSiteStore,
  } = useSiteContentStore();

  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState('');
  const [categoryDrafts, setCategoryDrafts] = useState<Record<string, string>>({});
  const [siteContentJson, setSiteContentJson] = useState('');
  const [siteContentMessage, setSiteContentMessage] = useState('');
  const [treatmentMessage, setTreatmentMessage] = useState('');
  const [isEditingSiteContent, setIsEditingSiteContent] = useState(false);

  const defaultCategory = store.categories[0] ?? 'GENERAL';
  const [form, setForm] = useState<TreatmentForm>(emptyForm(''));
  const authChecked = isAdminAuthenticated();
  const displayedSiteContentJson = isEditingSiteContent
    ? siteContentJson
    : JSON.stringify(siteStore, null, 2);

  useEffect(() => {
    if (authChecked) {
      return;
    }

    router.replace('/admin/login?next=/admin');
  }, [authChecked, router]);

  async function updateStore(nextTreatments: Treatment[], nextCategories?: string[]) {
    const categories = nextCategories ?? Array.from(new Set([...store.categories, ...nextTreatments.map((item) => item.type)]));
    return setStore({
      categories,
      treatments: nextTreatments,
    });
  }

  async function handleAddCategory() {
    const value = newCategory.trim();
    if (!value) {
      setTreatmentMessage('Category name cannot be empty.');
      return;
    }
    if (store.categories.includes(value)) {
      setTreatmentMessage('Category already exists.');
      return;
    }

    const result = await updateStore(store.treatments, [...store.categories, value]);
    setNewCategory('');
    setForm((prev) => ({ ...prev, type: value }));
    setTreatmentMessage(result.message);
  }

  async function handleRenameCategory(original: string) {
    const nextName = (categoryDrafts[original] ?? '').trim();
    if (!nextName || nextName === original) {
      setTreatmentMessage('Enter a new category name to rename.');
      return;
    }

    const nextCategories = store.categories.map((item) => (item === original ? nextName : item));
    const nextTreatments = store.treatments.map((item) =>
      item.type === original ? { ...item, type: nextName } : item
    );

    const result = await updateStore(nextTreatments, Array.from(new Set(nextCategories)));

    if (form.type === original) {
      setForm((prev) => ({ ...prev, type: nextName }));
    }

    setTreatmentMessage(result.message);
  }

  async function handleDeleteCategory(category: string) {
    const remaining = store.categories.filter((item) => item !== category);
    const fallback = remaining[0] ?? 'GENERAL';
    const nextCategories = remaining.length ? remaining : [fallback];

    const nextTreatments = store.treatments.map((item) =>
      item.type === category ? { ...item, type: fallback } : item
    );

    const result = await updateStore(nextTreatments, nextCategories);

    if (form.type === category) {
      setForm((prev) => ({ ...prev, type: fallback }));
    }

    setTreatmentMessage(result.message);
  }

  function clearForm() {
    setSelectedTreatmentId(null);
    setForm(emptyForm(''));
  }

  function handleImageUpload(file: File | null) {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const value = typeof reader.result === 'string' ? reader.result : '';
      setForm((prev) => ({ ...prev, imageSeed: value }));
    };
    reader.readAsDataURL(file);
  }

  async function handleSaveTreatment(event: FormEvent) {
    event.preventDefault();

    const title = form.title.trim();
    const type = (form.type || defaultCategory).trim();

    if (!title || !type) {
      setTreatmentMessage('Title and category are required.');
      return;
    }

    const id = (form.id.trim() || slugify(title)).toLowerCase();
    const benefits = form.benefitsText
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);

    const nextTreatment: Treatment = {
      id,
      title,
      type,
      description: form.description.trim(),
      detailedDescription: form.detailedDescription.trim(),
      imageSeed: form.imageSeed.trim() || 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200',
      benefits,
    };

    const exists = store.treatments.some((item) => item.id === id);
    const nextTreatments = exists
      ? store.treatments.map((item) => (item.id === id ? nextTreatment : item))
      : [nextTreatment, ...store.treatments];

    const nextCategories = store.categories.includes(type) ? store.categories : [...store.categories, type];
    const result = await updateStore(nextTreatments, nextCategories);

    setSelectedTreatmentId(id);
    setForm((prev) => ({ ...prev, id }));
    setTreatmentMessage(result.message || (exists ? 'Treatment updated successfully.' : 'Treatment created successfully.'));
  }

  async function handleDeleteTreatment(id: string) {
    const nextTreatments = store.treatments.filter((item) => item.id !== id);
    const result = await updateStore(nextTreatments);

    if (selectedTreatmentId === id) {
      clearForm();
    }

    setTreatmentMessage(result.message);
  }

  async function handleSaveSiteContent() {
    try {
      const parsed = JSON.parse(siteContentJson) as SiteContentStore;
      const result = await setSiteStore(parsed);
      setSiteContentMessage(result.message);
      setIsEditingSiteContent(false);
    } catch {
      setSiteContentMessage('Invalid JSON. Please fix formatting and try again.');
    }
  }

  if (!authChecked) {
    return <main className="min-h-screen bg-[var(--cream)]" />;
  }

  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden">
      <Navbar />

      <div className="bg-[var(--navy)] text-white py-16 text-center px-4">
        <h1 className="font-sans text-4xl md:text-6xl font-bold">Admin <span className="rosegold-text">Panel</span></h1>
        <p className="text-white/70 max-w-3xl mx-auto mt-3">
          Manage categories, treatments, and images dynamically. Your changes are stored in this browser and reflected across the site instantly.
        </p>
        <button
          type="button"
          onClick={() => {
            clearAdminAuthenticated();
            router.replace('/admin/login');
            router.refresh();
          }}
          className="mt-6 px-4 py-2 rounded-lg border border-white/30 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-[var(--navy)] transition-colors"
        >
          Logout
        </button>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white rounded-2xl border border-[var(--gold)]/25 shadow-xl p-6">
          <h2 className="font-sans text-2xl text-[var(--navy)] font-bold mb-4">Categories</h2>

          <div className="flex gap-2 mb-5">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Add category"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="px-3 py-2 rounded-lg bg-[var(--navy)] text-white"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 mb-6 max-h-72 overflow-auto pr-1">
            {store.categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <input
                  value={categoryDrafts[category] ?? category}
                  onChange={(e) => setCategoryDrafts((prev) => ({ ...prev, [category]: e.target.value }))}
                  className="flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
                />
                <button type="button" onClick={() => handleRenameCategory(category)} className="p-2 rounded-md border border-[var(--gold)]/40 text-[var(--navy)]">
                  <Pencil className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => handleDeleteCategory(category)} className="p-2 rounded-md border border-red-300 text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={async () => {
                const result = await resetStore();
                clearForm();
                setTreatmentMessage(result.message);
              }}
              className="w-full bg-red-50 text-red-700 border border-red-200 rounded-lg py-2 text-sm font-semibold"
            >
              Reset to Default Data
            </button>
            <Link href="/treatments" className="block text-center w-full bg-[var(--navy)] text-white rounded-lg py-2 text-sm font-semibold">
              Preview Treatments Page
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border border-[var(--gold)]/25 shadow-xl p-6">
          <h2 className="font-sans text-2xl text-[var(--navy)] font-bold mb-4">
            {selectedTreatmentId ? 'Edit Treatment' : 'Add Treatment'}
          </h2>

          <form onSubmit={handleSaveTreatment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value, id: prev.id || slugify(e.target.value) }))}
                placeholder="Treatment title"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
              />
              <input
                value={form.id}
                onChange={(e) => setForm((prev) => ({ ...prev, id: slugify(e.target.value) }))}
                placeholder="Slug (id)"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={form.type || defaultCategory}
                onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
              >
                {store.categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <input
                value={form.imageSeed}
                onChange={(e) => setForm((prev) => ({ ...prev, imageSeed: e.target.value }))}
                placeholder="Image URL"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-[var(--navy)] cursor-pointer">
              <Upload className="w-4 h-4" />
              Upload image file
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e.target.files?.[0] ?? null)}
              />
            </label>

            <textarea
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Short description"
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
            />

            <textarea
              value={form.detailedDescription}
              onChange={(e) => setForm((prev) => ({ ...prev, detailedDescription: e.target.value }))}
              placeholder="Detailed description"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
            />

            <textarea
              value={form.benefitsText}
              onChange={(e) => setForm((prev) => ({ ...prev, benefitsText: e.target.value }))}
              placeholder="Benefits (one per line)"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]"
            />

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="bg-[var(--navy)] text-white px-5 py-2 rounded-lg text-sm font-semibold">
                Save Treatment
              </button>
              <button type="button" onClick={clearForm} className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold">
                New Treatment Form
              </button>
            </div>

            {treatmentMessage ? (
              <p className="text-sm text-[var(--navy)]">{treatmentMessage}</p>
            ) : null}
          </form>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-sans text-xl text-[var(--navy)] font-bold mb-4">All Treatments ({store.treatments.length})</h3>
            <div className="space-y-2 max-h-96 overflow-auto pr-1">
              {store.treatments.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white">
                  <div className="min-w-0">
                    <p className="font-semibold text-[var(--navy)] truncate">{item.title}</p>
                    <p className="text-xs uppercase tracking-wider text-[var(--gold-deep)]">{item.type} • {item.id}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTreatmentId(item.id);
                        setForm({
                          id: item.id,
                          title: item.title,
                          type: item.type,
                          description: item.description,
                          detailedDescription: item.detailedDescription,
                          imageSeed: item.imageSeed,
                          benefitsText: item.benefits.join('\n'),
                        });
                      }}
                      className="px-3 py-1.5 text-xs rounded-md border border-[var(--gold)]/40 text-[var(--navy)]"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteTreatment(item.id)}
                      className="px-3 py-1.5 text-xs rounded-md border border-red-300 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="bg-white rounded-2xl border border-[var(--gold)]/25 shadow-xl p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
            <div>
              <h2 className="font-sans text-2xl text-[var(--navy)] font-bold">Dynamic Site Content Editor</h2>
              <p className="text-sm text-gray-600 mt-1">
                Full flexibility: edit specialists, blog/stories, hero, about, contact, footer, instagram feed, and homepage section details.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleSaveSiteContent}
                className="bg-[var(--navy)] text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Save Site Content JSON
              </button>
              <button
                type="button"
                onClick={async () => {
                  const result = await resetSiteStore();
                  setSiteContentMessage(result.message);
                  setIsEditingSiteContent(false);
                }}
                className="bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Reset Dynamic Content
              </button>
            </div>
          </div>

          <textarea
            value={displayedSiteContentJson}
            onChange={(e) => {
              setIsEditingSiteContent(true);
              setSiteContentJson(e.target.value);
            }}
            rows={28}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-xs font-mono focus:outline-none focus:border-[var(--gold)]"
            spellCheck={false}
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/" className="px-3 py-2 rounded-md border border-[var(--gold)]/40 text-[var(--navy)] text-xs">Preview Home</Link>
            <Link href="/about" className="px-3 py-2 rounded-md border border-[var(--gold)]/40 text-[var(--navy)] text-xs">Preview About</Link>
            <Link href="/specialists" className="px-3 py-2 rounded-md border border-[var(--gold)]/40 text-[var(--navy)] text-xs">Preview Specialists</Link>
            <Link href="/blog" className="px-3 py-2 rounded-md border border-[var(--gold)]/40 text-[var(--navy)] text-xs">Preview Blog/Stories</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md border border-[var(--gold)]/40 text-[var(--navy)] text-xs">Preview Contact</Link>
          </div>

          {siteContentMessage ? (
            <p className="mt-3 text-sm text-[var(--navy)]">{siteContentMessage}</p>
          ) : null}
        </div>
      </section>

      <Footer />
    </main>
  );
}
