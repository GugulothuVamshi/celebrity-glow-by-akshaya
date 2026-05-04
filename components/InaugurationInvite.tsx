export default function InaugurationInvite() {
  return (
    <section className="py-16 bg-[#fdf8f8]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 border-double border-4 border-gold shadow-2xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500">
            You are cordially invited
          </p>
          <h2 className="font-sans text-3xl md:text-5xl mb-6 text-[#1A2E44]">
            Grand <span className="rosegold-text">Inauguration</span>
          </h2>
          <div className="w-20 h-px bg-(--rosegold) mx-auto mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-rose-400 mb-1">
                Date
              </p>
              <p className="font-sans text-2xl text-[#1A2E44]">05 MARCH</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-rose-400 mb-1">
                Venue
              </p>
              <p className="text-sm font-medium text-[#1A2E44]">
                Road No: 3, Banjara Hills
                <br />
                <span className="text-xs opacity-60 italic">
                  Back side to &apos;KORA BY NM&apos;
                </span>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-rose-400 mb-1">
                Time
              </p>
              <p className="font-sans text-2xl text-[#1A2E44]">10:00 AM</p>
            </div>
          </div>

          <p className="italic text-gray-600">
            &quot;Your presence will make the occasion even more special&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
