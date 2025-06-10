
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', href: '#', active: true },
    { name: 'عن تكامل', href: '#' },
    { name: 'مجالات العمل', href: '#' },
    { name: 'المنتجات', href: '#' },
    { name: 'الشركات التابعة', href: '#' },
    { name: 'الشركاء', href: '#' },
    { name: 'مركز المعرفة', href: '#' },
    { name: 'انضم الآن', href: '#' },
    { name: 'الموردون', href: '#' },
  ];

  return (
    <nav className="glassmorphic rounded-full px-6 py-4 mx-4 mt-6 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-reverse space-x-2">
          <div className="text-2xl font-bold text-foreground font-amiri">
            تكامل
          </div>
          <div className="text-sm text-foreground/60">Takamol</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-reverse space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${item.active ? 'text-purple-400 font-medium' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <div className="hidden lg:flex items-center space-x-reverse space-x-4">
          <div className="glassmorphic rounded-full px-4 py-2 text-sm">
            <span className="text-purple-400 font-medium">ENG</span>
          </div>
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
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/20">
              <div className="glassmorphic rounded-full px-4 py-2 text-sm text-center">
                <span className="text-purple-400 font-medium">ENG</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
