
import { Collection } from "@/types";
import { Link } from "react-router-dom";

// Sample collections data
const collections: Collection[] = [
  {
    id: "italian-classics",
    name: "Italian Classics",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=1080",
    recipeCount: 42
  },
  {
    id: "quick-and-easy",
    name: "Quick & Easy",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1080",
    recipeCount: 30
  },
  {
    id: "healthy-dinner",
    name: "Healthy Dinner",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1080",
    recipeCount: 38
  },
  {
    id: "dessert-time",
    name: "Dessert Time",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1080",
    recipeCount: 25
  }
];

export default function CollectionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10">Popular Collections</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              to={`/collections/${collection.id}`} 
              className="relative rounded-xl overflow-hidden group h-64 shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                <p className="text-sm opacity-90">{collection.recipeCount} Recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
