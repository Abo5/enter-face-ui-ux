
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ContactWidget from '@/components/ContactWidget';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden cursor-none">
      <CursorEffect />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(60,20,120,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ContactWidget />
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-950/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-950/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default Index;
