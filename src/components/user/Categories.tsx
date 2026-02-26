import { Music, Mic, Theater, Palette, Dumbbell, Gamepad2 } from 'lucide-react';
import React from 'react';

interface Category {
  name: string;
  icon: React.ElementType;
  color: string;
}

const categories: Category[] = [
  { name: 'Music', icon: Music, color: 'text-rose-500 bg-rose-50 border-rose-100' },
  { name: 'Conferences', icon: Mic, color: 'text-sky-500 bg-sky-50 border-sky-100' },
  { name: 'Cultural', icon: Theater, color: 'text-violet-500 bg-violet-50 border-violet-100' },
  { name: 'Workshops', icon: Palette, color: 'text-amber-500 bg-amber-50 border-amber-100' },
  { name: 'Sports', icon: Dumbbell, color: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
  { name: 'Tech', icon: Gamepad2, color: 'text-indigo-500 bg-indigo-50 border-indigo-100' },
];

const Categories: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Explore by <span>Category</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto">
            Find events that match your interests. From music festivals to tech conferences, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="group relative p-4 md:p-6 rounded-2xl md:rounded-3xl bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-5 transition-all duration-300 ${category.color} group-hover:scale-110 group-hover:shadow-lg`}>
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;