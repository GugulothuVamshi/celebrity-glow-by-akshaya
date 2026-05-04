import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="font-sans text-7xl md:text-9xl font-bold text-[var(--rosegold)] mb-4">404</h1>
      <h2 className="font-sans text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-[var(--navy)] text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[var(--rosegold)] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
