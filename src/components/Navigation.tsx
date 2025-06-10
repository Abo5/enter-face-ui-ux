
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(true);

  const menuItems = [
    { name: 'الرئيسية', nameEn: 'Home', href: '#', active: true },
    { name: 'عن تكامل', nameEn: 'About Takamol', href: '#' },
    { name: 'مجالات العمل', nameEn: 'Work Areas', href: '#' },
    { name: 'المنتجات', nameEn: 'Products', href: '#' },
    { name: 'الشركات التابعة', nameEn: 'Subsidiaries', href: '#' },
    { name: 'الشركاء', nameEn: 'Partners', href: '#' },
    { name: 'مركز المعرفة', nameEn: 'Knowledge Center', href: '#' },
    { name: 'انضم الآن', nameEn: 'Join Now', href: '#' },
    { name: 'الموردون', nameEn: 'Suppliers', href: '#' },
  ];

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    // تحديث اتجاه الصفحة
    document.documentElement.dir = isArabic ? 'ltr' : 'rtl';
    document.documentElement.lang = isArabic ? 'en' : 'ar';
  };

  return (
    <nav className="glassmorphic rounded-full px-6 py-4 mx-4 mt-6 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-reverse space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-foreground font-amiri">
              {isArabic ? 'تكامل' : 'Takamol'}
            </div>
            <div className="text-xs text-foreground/60">
              {isArabic ? 'Takamol' : 'تكامل'}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-reverse space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link text-sm ${item.active ? 'text-purple-400 font-medium' : ''}`}
            >
              {isArabic ? item.name : item.nameEn}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <div className="hidden lg:flex items-center space-x-reverse space-x-4">
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="sm"
            className="glassmorphic rounded-full px-4 py-2 text-sm hover:bg-purple-950/30 transition-all duration-300"
          >
            <Globe size={16} className="ml-2" />
            <span className="text-purple-400 font-medium">
              {isArabic ? 'ENG' : 'عربي'}
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 glassmorphic rounded-2xl p-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link py-2 ${item.active ? 'text-purple-400 font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? item.name : item.nameEn}
              </a>
            ))}
            <div className="pt-4 border-t border-white/20">
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="glassmorphic rounded-full px-4 py-2 text-sm w-full hover:bg-purple-950/30 transition-all duration-300"
              >
                <Globe size={16} className="ml-2" />
                <span className="text-purple-400 font-medium">
                  {isArabic ? 'ENG' : 'عربي'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
