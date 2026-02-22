import { PlusCircle, ClipboardList, DollarSign, BarChart4, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: PlusCircle,
    title: "Create event",
    description: "Launch your event page in minutes with our intuitive builder."
  },
  {
    icon: ClipboardList,
    title: "Manage bookings",
    description: "Real-time attendee tracking and seamless guest list management."
  },
  {
    icon: DollarSign,
    title: "Track revenue",
    description: "Monitor your earnings with detailed financial reports and payouts."
  },
  {
    icon: BarChart4,
    title: "Analytics dashboard",
    description: "Gain insights into audience behavior and sales performance."
  }
];

const ForOrganizers = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          Host Your Event with Confidence
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
          We provide a seamless platform for organizers to create, manage, and grow their events.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 text-center transition-all duration-300 hover:bg-slate-800 hover:border-primary/50 hover:-translate-y-1">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-5 mx-auto border border-slate-700">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16">
          <button className="group bg-primary text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-secondary transition-all duration-300 text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-secondary/30 transform hover:-translate-y-1 flex items-center mx-auto">
            Start Hosting
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForOrganizers;