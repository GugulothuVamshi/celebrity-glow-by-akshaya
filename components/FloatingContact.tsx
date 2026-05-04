import { MessageCircle, CalendarCheck } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="floating-contact flex flex-col space-y-3">
      <a
        href="https://wa.me/+919963226911"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="#contact"
        className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <CalendarCheck className="w-6 h-6" />
      </a>
    </div>
  );
}
