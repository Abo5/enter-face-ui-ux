
const HeroSection = () => {
  return (
    <section className="px-4 py-20 text-center relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-shadow font-amiri">
          انضم الآن
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-16 animate-fade-in font-cairo" style={{animationDelay: '0.2s'}}>
          هنا تقدم الاتفاق لتكونوا جزءاً من مسيرة التمكين
        </p>

        {/* Feature Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          
          {/* Job Opportunities Card */}
          <div className="feature-card text-right relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="currentColor" opacity="0.1"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-cairo">الفرص الوظيفية</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                انطلق في رحلتك المهنية معنا لاستكشاف إمكانياتك وتطوير مهاراتك، ولكن جزءاً من رؤية تكامل الطامحة.
              </p>
              <button className="btn-primary">
                استكشف الوظائف
              </button>
            </div>
          </div>

          {/* Training Opportunities Card */}
          <div className="feature-card text-right relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="50,15 85,75 15,75" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.1"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-cairo">الفرص التدريبية</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                انضم إلى برنامج "تكاملي طموح". المصمم لتطوير وتدريب الخدمات الواعدة من حديثي التخرج ومأهيلهم لسوق العمل.
              </p>
              <button className="btn-secondary">
                مؤهل
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
