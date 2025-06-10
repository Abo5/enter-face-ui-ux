
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
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

  const quickLinks = [
    { name: 'الرئيسية', nameEn: 'Home', href: '#' },
    { name: 'عن تكامل', nameEn: 'About Takamol', href: '#' },
    { name: 'مجالات العمل', nameEn: 'Work Areas', href: '#' },
    { name: 'المنتجات', nameEn: 'Products', href: '#' },
    { name: 'انضم الآن', nameEn: 'Join Now', href: '#' },
  ];

  const services = [
    { name: 'التوظيف', nameEn: 'Employment', href: '#' },
    { name: 'التدريب', nameEn: 'Training', href: '#' },
    { name: 'الاستشارات', nameEn: 'Consulting', href: '#' },
    { name: 'تطوير المهارات', nameEn: 'Skills Development', href: '#' },
    { name: 'البرامج المتخصصة', nameEn: 'Specialized Programs', href: '#' },
  ];

  return (
    <footer className="relative bg-black border-t border-purple-900/30 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(60,20,120,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-foreground font-amiri">
                  {isArabic ? 'تكامل' : 'Takamol'}
                </div>
                <div className="text-sm text-foreground/60">
                  {isArabic ? 'منصة التوظيف والتدريب' : 'Employment & Training Platform'}
                </div>
              </div>
            </div>
            
            <p className="text-foreground/70 leading-relaxed">
              {isArabic 
                ? 'نحن نربط بين المواهب والفرص، ونوفر برامج تدريبية متخصصة لتطوير المهارات وتحقيق النجاح المهني.'
                : 'We connect talents with opportunities, providing specialized training programs to develop skills and achieve professional success.'
              }
            </p>

            {/* Social Media */}
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-purple-950/40 transition-all duration-300">
                <Facebook size={18} className="text-purple-300" />
              </a>
              <a href="#" className="w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-purple-950/40 transition-all duration-300">
                <Twitter size={18} className="text-purple-300" />
              </a>
              <a href="#" className="w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-purple-950/40 transition-all duration-300">
                <Linkedin size={18} className="text-purple-300" />
              </a>
              <a href="#" className="w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-purple-950/40 transition-all duration-300">
                <Instagram size={18} className="text-purple-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground font-amiri">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-purple-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full ml-3 mr-0"></span>
                    {isArabic ? link.name : link.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground font-amiri">
              {isArabic ? 'خدماتنا' : 'Our Services'}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-foreground/70 hover:text-purple-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full ml-3 mr-0"></span>
                    {isArabic ? service.name : service.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground font-amiri">
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail size={20} className="text-purple-300" />
                <span className="text-foreground/70">info@takamol.com</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone size={20} className="text-purple-300" />
                <span className="text-foreground/70" dir="ltr">+966 11 123 4567</span>
              </div>
              <div className="flex items-start space-x-reverse space-x-3">
                <MapPin size={20} className="text-purple-300 mt-1" />
                <span className="text-foreground/70">
                  {isArabic 
                    ? 'الرياض، المملكة العربية السعودية' 
                    : 'Riyadh, Saudi Arabia'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-purple-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              {isArabic 
                ? '© 2024 تكامل. جميع الحقوق محفوظة.' 
                : '© 2024 Takamol. All rights reserved.'
              }
            </p>
            <div className="flex space-x-reverse space-x-6">
              <a href="#" className="text-foreground/60 hover:text-purple-300 transition-colors text-sm">
                {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-foreground/60 hover:text-purple-300 transition-colors text-sm">
                {isArabic ? 'شروط الاستخدام' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-950/20 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
