import { ArrowRight } from 'lucide-react';

const CallToActionBanner = () => {
  return (
    <section className="relative bg-slate-900">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1950&q=80" 
          alt="Concert crowd"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight">
          Ready to Experience Something Amazing?
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-300">
          Discover unforgettable events and create memories that will last a lifetime. Your next great story starts here.
        </p>
        <div className="mt-8 md:mt-10">
          <button className="group bg-primary text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-secondary transition-all duration-300 text-base md:text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-secondary/30 transform hover:-translate-y-1 flex items-center mx-auto">
            Browse Events
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;