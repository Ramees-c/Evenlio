import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    title: 'Discover Amazing Events',
    subtitle: 'Find and book tickets for concerts, workshops, and conferences near you.',
    cta: 'Explore Events',
    link: '/events'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
    title: 'Unforgettable Experiences',
    subtitle: 'Join thousands of people creating memories that last a lifetime.',
    cta: 'Get Started',
    link: '/register'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    title: 'Connect with Communities',
    subtitle: 'Meet like-minded people and grow your network at exclusive gatherings.',
    cta: 'Join Now',
    link: '/login'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 pt-4">
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl bg-primary">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl space-y-6">
              <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight transform transition-all duration-700 delay-100 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.title}
              </h1>
              <p className={`text-lg md:text-xl text-gray-200 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.subtitle}
              </p>
              <div className={`transform transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Link
                  to={slide.link}
                  className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-secondary/30"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-secondary w-8' : 'bg-white/50 w-2.5 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Hero;
