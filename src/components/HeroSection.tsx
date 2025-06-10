
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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

  const stats = [
    { 
      icon: Users, 
      number: '50K+', 
      label: isArabic ? 'مستخدم نشط' : 'Active Users'
    },
    { 
      icon: Award, 
      number: '95%', 
      label: isArabic ? 'معدل النجاح' : 'Success Rate'
    },
    { 
      icon: TrendingUp, 
      number: '200+', 
      label: isArabic ? 'شركة شريكة' : 'Partner Companies'
    },
    { 
      icon: Star, 
      number: '4.9', 
      label: isArabic ? 'تقييم المستخدمين' : 'User Rating'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Content */}
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Main Heading */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight font-amiri">
            {isArabic ? (
              <>
                منصة <span className="text-purple-400">تكامل</span>
                <br />
                للتوظيف والتدريب
              </>
            ) : (
              <>
                <span className="text-purple-400">Takamol</span> Platform
                <br />
                for Employment & Training
              </>
            )}
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'نحن نربط بين المواهب والفرص، ونوفر برامج تدريبية متخصصة لتطوير المهارات وتحقيق النجاح المهني'
              : 'We connect talents with opportunities, providing specialized training programs to develop skills and achieve professional success'
            }
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
          <Button className="btn-primary group">
            {isArabic ? 'ابدأ رحلتك الآن' : 'Start Your Journey Now'}
            {isArabic ? (
              <ArrowLeft size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
            ) : (
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
          
          <Button variant="outline" className="btn-secondary">
            {isArabic ? 'استكشف البرامج' : 'Explore Programs'}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {stats.map((stat, index) => (
            <div key={index} className="feature-card text-center">
              <stat.icon size={32} className="text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-foreground/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-purple-950/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-900/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;
