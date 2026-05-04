'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--cream)] flex flex-col items-center justify-center p-4 text-center">
      <h2 className="font-sans text-3xl md:text-5xl font-bold text-[var(--navy)] mb-6">
        Something went <span className="rosegold-text">wrong!</span>
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="bg-[var(--navy)] text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[var(--rosegold)] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
