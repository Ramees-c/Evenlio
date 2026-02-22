import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import EventCard from "../../components/user/EventCard";
import Hero from "../../components/user/Hero";
import SearchFilter from "../../components/user/SearchFilter";
import UpcomingEventsTimeline from "../../components/user/UpcomingEventsTimeline";
import Categories from "../../components/user/Categories";
import WhyChooseUs from "../../components/user/WhyChooseUs";
import ForOrganizers from "../../components/user/ForOrganizers";
import Testimonials from "../../components/user/Testimonials";
import CallToActionBanner from "../../components/user/CallToActionBanner";
import Footer from "../../components/user/Footer";

const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join us for the biggest tech conference of the year.",
    date: "2024-11-15",
    location: "San Francisco, CA",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Music Festival",
    description: "A weekend of music, food, and fun.",
    date: "2024-12-01",
    location: "Austin, TX",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Art Exhibition",
    description: "Explore contemporary art from local artists.",
    date: "2024-10-20",
    location: "New York, NY",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Art Exhibition",
    description: "Explore contemporary art from local artists.",
    date: "2024-10-20",
    location: "New York, NY",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Art Exhibition",
    description: "Explore contemporary art from local artists.",
    date: "2024-10-20",
    location: "New York, NY",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Art Exhibition",
    description: "Explore contemporary art from local artists.",
    date: "2024-10-20",
    location: "New York, NY",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=300&auto=format&fit=crop&q=60",
  },
];

const Home = () => {
  const [events] = useState(DUMMY_EVENTS);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const firstCard = scrollContainer.firstElementChild;
        if (firstCard) {
          const style = window.getComputedStyle(scrollContainer);
          const gap = parseInt(style.gap || '0', 10);
          scrollContainer.scrollBy({ left: firstCard.clientWidth + gap, behavior: 'smooth' });
        }
      }
    };

    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(autoScroll, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <SearchFilter />

      <UpcomingEventsTimeline events={events} />

      <Categories />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Events</h2>
            <p className="text-gray-500 mt-2">
              Don't miss out on these popular events
            </p>
          </div>
          <button className="text-primary font-semibold hover:text-secondary transition-colors group flex items-center gap-1 self-start sm:self-auto">
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 gap-6 md:gap-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {events.map((event) => (
            <div key={event.id} className="min-w-[100%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start flex-shrink-0">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      <WhyChooseUs />

      <ForOrganizers />

      <Testimonials />

      <CallToActionBanner />

      <Footer />
    </div>
  );
};

export default Home;
