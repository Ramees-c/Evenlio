import { ShieldCheck, Zap, Ticket, BarChart } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Your transactions are protected with industry-standard security.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Book your tickets in seconds and get immediate confirmation.",
  },
  {
    icon: Ticket,
    title: "Digital Tickets",
    description:
      "Access your tickets anytime, anywhere from your mobile device.",
  },
  {
    icon: BarChart,
    title: "Organizer Dashboard",
    description:
      "Powerful tools for event organizers to track sales and attendees.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Book With Us?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            We provide the best experience for both attendees and organizers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-white 
                border border-gray-100 hover:shadow-lg transition-all 
                duration-300 text-center group cursor-default 
                hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 bg-white rounded-xl shadow-sm 
                  flex items-center justify-center mx-auto mb-5 md:mb-6 
                  group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    className="w-6 h-6 md:w-7 md:h-7 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;