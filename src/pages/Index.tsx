
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ContactWidget from '@/components/ContactWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
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
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default Index;
