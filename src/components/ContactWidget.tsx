
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const ContactWidget = () => {
  const [isArabic, setIsArabic] = useState(true);

  useEffect(() => {
    // مراقبة تغيير اللغة من خلال DOM
    const observer = new MutationObserver(() => {
      setIsArabic(document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-50 animate-fade-in" style={{animationDelay: '1s'}}>
      <button className="glassmorphic rounded-full p-4 hover:bg-purple-950/40 transition-all duration-300 hover:scale-110 group">
        <div className="flex items-center space-x-reverse space-x-3">
          <MessageCircle size={24} className="text-purple-300" />
          <span className="hidden md:block text-sm font-medium">
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </span>
        </div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-purple-950/30 animate-ping group-hover:animate-none"></div>
      </button>
    </div>
  );
};

export default ContactWidget;
