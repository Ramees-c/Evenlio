import { Link } from 'react-router-dom';

interface Props {
  event: {
    id: number;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

const EventCard = ({ event }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-300">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 md:p-5">
        <h2 className="text-lg md:text-xl font-bold text-primary mb-1 truncate">{event.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{event.location}</p>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold text-secondary">₹{event.price}</p>
          <Link
            to={`/event/${event.id}`}
            className="bg-primary text-white px-5 py-2 rounded-full font-medium text-sm w-full sm:w-auto text-center
                       hover:bg-secondary transition-all duration-300 shadow-md
                       transform hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-primary/30"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
