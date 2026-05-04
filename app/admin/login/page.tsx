'use client';

import { FormEvent, Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  isAdminAuthenticated,
  setAdminAuthenticated,
  verifyAdminCredentials,
} from '@/lib/admin-auth';

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      return;
    }

    const next = searchParams.get('next') || '/admin';
    router.replace(next);
  }, [router, searchParams]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!verifyAdminCredentials(username, password)) {
        setError('Invalid username or password.');
        return;
      }

      setAdminAuthenticated();
      const next = searchParams.get('next') || '/admin';
      router.replace(next);
      router.refresh();
    } catch {
      setError('Unable to login right now. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white border border-[var(--gold)]/30 rounded-2xl shadow-2xl p-8">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--gold-deep)] font-semibold mb-3">Admin Access</p>
        <h1 className="font-sans text-3xl text-[var(--navy)] font-bold mb-2">Sign in to Admin</h1>
        <p className="text-sm text-gray-600 mb-8">Enter your credentials to manage dynamic website content.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--gold)]"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--gold)]"
              autoComplete="current-password"
              required
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--navy)] text-white py-3 rounded-lg uppercase tracking-[0.2em] text-xs font-semibold disabled:opacity-70"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[var(--cream)] flex items-center justify-center" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
