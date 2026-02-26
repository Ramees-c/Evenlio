import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Music Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
    content: "Evenlio made it incredibly easy to find and book tickets for my favorite concerts. The interface is smooth and the checkout process is secure.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Organizer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
    content: "I've been using Evenlio to host my tech workshops for a year now. The analytics dashboard helps me understand my audience better.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Art Lover",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60",
    content: "I love discovering local art exhibitions through this platform. The recommendations are always spot on!",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Loved by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Don't just take our word for it. Here's what our community has to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 relative hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
              <Quote className="absolute top-6 right-6 w-8 h-8 md:top-8 md:right-8 md:w-10 md:h-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-base flex-grow">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-4 border-gray-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;