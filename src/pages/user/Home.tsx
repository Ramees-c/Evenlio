import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import EventCard from "../../components/user/EventCard";
import Hero from "../../components/user/Hero";
import SearchFilter from "../../components/user/SearchFilter";
import UpcomingEventsTimeline from "../../components/user/UpcomingEventsTimeline";
import Footer from "../../components/user/Footer";
import CallToActionBanner from "../../components/user/CallToActionBanner";
import Testimonials from "../../components/user/Testimonials";
import ForOrganizers from "../../components/user/ForOrganizers";
import WhyChooseUs from "../../components/user/WhyChooseUs";
import Categories from "../../components/user/Categories";

/* =========================
   Event Type Definition
========================= */
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  image: string;
}

/* =========================
   Dummy Data
========================= */
const DUMMY_EVENTS: Event[] = [
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
    title: "Startup Meetup",
    description: "Networking event for startup founders.",
    date: "2024-09-30",
    location: "Los Angeles, CA",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b1c4b?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Design Workshop",
    description: "Hands-on UI/UX design workshop.",
    date: "2024-10-05",
    location: "Chicago, IL",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Food Carnival",
    description: "Taste dishes from around the world.",
    date: "2024-11-01",
    location: "Miami, FL",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&auto=format&fit=crop&q=60",
  },
];

/* =========================
   Component
========================= */
const Home: React.FC = () => {
  const [events] = useState<Event[]>(DUMMY_EVENTS);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 10
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const firstCard = scrollContainer.firstElementChild;
        if (firstCard instanceof HTMLElement) {
          const style = window.getComputedStyle(scrollContainer);
          const gap = parseInt(style.gap || "0", 10);

          scrollContainer.scrollBy({
            left: firstCard.clientWidth + gap,
            behavior: "smooth",
          });
        }
      }
    };

   let intervalId: ReturnType<typeof setInterval>;

    if (!isPaused) {
      intervalId = setInterval(autoScroll, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <SearchFilter />
      <UpcomingEventsTimeline events={events} />
      <Categories />

      {/* Featured Events */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Events
            </h2>
            <p className="text-gray-500 mt-2">
              Don't miss out on these popular events
            </p>
          </div>

          <button
            type="button"
            className="text-primary font-semibold hover:text-secondary 
            transition-colors group flex items-center gap-1 
            self-start sm:self-auto"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 gap-6 md:gap-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="min-w-[100%] md:min-w-[calc(50%-16px)] 
              lg:min-w-[calc(33.333%-22px)] snap-start flex-shrink-0"
            >
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