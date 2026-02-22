import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Filter, DollarSign, ChevronDown, Check } from 'lucide-react';

const SearchFilter = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const locations = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'pune', label: 'Pune' },
    { value: 'hyderabad', label: 'Hyderabad' },
  ];

  const categories = [
    { value: 'music', label: 'Music' },
    { value: 'tech', label: 'Technology' },
    { value: 'arts', label: 'Arts & Culture' },
    { value: 'sports', label: 'Sports' },
    { value: 'food', label: 'Food & Drink' },
  ];

  const prices = [
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Paid' },
    { value: 'under-500', label: 'Under ₹500' },
    { value: '500-1000', label: '₹500 - ₹1000' },
    { value: 'above-1000', label: 'Above ₹1000' },
  ];

  const handleSelect = (key: string, value: string) => {
    if (key === 'location') setLocation(value);
    if (key === 'category') setCategory(value);
    if (key === 'price') setPrice(value);
    setOpenDropdown(null);
  };

  const CustomSelect = ({ 
    icon: Icon, 
    placeholder, 
    value, 
    options, 
    dropdownKey 
  }: { 
    icon: any, 
    placeholder: string, 
    value: string, 
    options: any[], 
    dropdownKey: string 
  }) => {
    const isOpen = openDropdown === dropdownKey;
    const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

    return (
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isOpen || value ? 'text-primary' : 'text-gray-400'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <button
          onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
          className={`w-full pl-12 pr-10 py-3.5 text-left bg-gray-50 hover:bg-white rounded-2xl border transition-all duration-300 font-medium shadow-sm flex items-center justify-between outline-none
            ${isOpen ? 'bg-white border-primary/50 ring-4 ring-primary/10' : 'border-gray-200 hover:border-primary/30'}
            ${value ? 'text-gray-900' : 'text-gray-500'}
          `}
        >
          <span className="truncate">{selectedLabel}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
        </button>

        <div className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 origin-top
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}>
          <div className="max-h-60 overflow-y-auto py-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div 
              className={`px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between ${value === '' ? 'text-primary font-medium bg-primary/5' : 'text-gray-700'}`}
              onClick={() => handleSelect(dropdownKey, '')}
            >
              <span>{placeholder}</span>
              {value === '' && <Check className="w-4 h-4" />}
            </div>
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between ${value === option.value ? 'text-primary font-medium bg-primary/5' : 'text-gray-700'}`}
                onClick={() => handleSelect(dropdownKey, option.value)}
              >
                <span>{option.label}</span>
                {value === option.value && <Check className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Find Your Next <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Search through thousands of events by location, category, date, and price to find exactly what you're looking for.
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-gray-100 max-w-7xl mx-auto">
          <div ref={dropdownRef} className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 lg:col-span-3 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search events, artists..."
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 hover:bg-white focus:bg-white rounded-2xl border border-gray-200 hover:border-primary/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-700 font-medium shadow-sm"
              />
            </div>

            {/* Location Dropdown */}
            <div className="md:col-span-3 lg:col-span-2">
              <CustomSelect 
                icon={MapPin}
                placeholder="Select Location"
                value={location}
                options={locations}
                dropdownKey="location"
              />
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3 lg:col-span-2">
              <CustomSelect 
                icon={Filter}
                placeholder="All Categories"
                value={category}
                options={categories}
                dropdownKey="category"
              />
            </div>

            {/* Date Picker */}
            <div className="md:col-span-2 lg:col-span-2 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <input
                type="date"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 hover:bg-white focus:bg-white rounded-2xl border border-gray-200 hover:border-primary/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-gray-700 font-medium cursor-pointer shadow-sm"
              />
            </div>

            {/* Price Range Filter */}
            <div className="md:col-span-2 lg:col-span-2">
              <CustomSelect 
                icon={DollarSign}
                placeholder="Any Price"
                value={price}
                options={prices}
                dropdownKey="price"
              />
            </div>

            {/* Search Button */}
            <div className="md:col-span-2 lg:col-span-1">
              <button className="w-full h-full bg-primary hover:bg-secondary text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
                <Search className="w-5 h-5 lg:hidden mr-2" />
                <span className="lg:hidden">Search</span>
                <Search className="w-5 h-5 hidden lg:block" />
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-6 flex flex-wrap gap-2 items-center justify-center lg:justify-start">
             <span className="text-sm text-gray-500 font-medium mr-2">Popular:</span>
             {['Concerts', 'Workshops', 'Weekend', 'Free Entry', 'Music'].map((tag) => (
               <button key={tag} className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-colors duration-200">
                 {tag}
               </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;