import { useRef, useEffect, useState } from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const UpcomingEventsTimeline = ({ events }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      // Check if we've reached the end (with a small buffer for float precision)
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by the width of the first card + gap
        const firstCard = scrollContainer.firstElementChild;
        if (firstCard) {
          const cardWidth = firstCard.clientWidth;
          // Add gap (approx 20px to cover gap-4/gap-6 and trigger snap)
          scrollContainer.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
        }
      }
    };

    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(autoScroll, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const getDaysRemaining = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            Happening Soon
          </h2>
          <button className="text-primary font-medium hover:text-secondary transition-colors flex items-center gap-1 text-sm group">
            View Calendar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto pb-6 md:pb-8 gap-4 md:gap-6 snap-x snap-mandatory scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event) => {
              const daysRemaining = getDaysRemaining(event.date);
              const eventDate = new Date(event.date);
              
              return (
                <div 
                  key={event.id} 
                  className="min-w-[85vw] sm:min-w-[300px] md:min-w-[350px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 snap-center md:snap-start group cursor-pointer flex-shrink-0"
                >
                  <div className="relative h-48 rounded-t-2xl overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {daysRemaining} days left
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-center bg-primary/5 rounded-xl p-2 min-w-[60px]">
                        <span className="block text-xs font-bold text-primary uppercase">
                          {eventDate.toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-xl font-bold text-gray-900">
                          {eventDate.getDate()}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                          {event.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-400 font-medium">
                          <span>{event.location}</span>
                          <span className="mx-2">•</span>
                          <span className="text-primary">₹{event.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsTimeline;