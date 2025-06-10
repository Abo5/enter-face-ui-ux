
import { MessageCircle } from 'lucide-react';

const ContactWidget = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 animate-fade-in" style={{animationDelay: '1s'}}>
      <button className="glassmorphic rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
        <div className="flex items-center space-x-reverse space-x-3">
          <MessageCircle size={24} className="text-primary" />
          <span className="hidden md:block text-sm font-medium">تواصل معنا</span>
        </div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none"></div>
      </button>
    </div>
  );
};

export default ContactWidget;
