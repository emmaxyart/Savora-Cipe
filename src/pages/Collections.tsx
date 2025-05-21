
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCollections } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Collections() {
  // Group collections in pairs for layout
  const groupedCollections = mockCollections.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / 2);
    
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    
    result[groupIndex].push(item);
    return result;
  }, [] as typeof mockCollections[]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Recipe Collections</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Discover our curated collections of recipes, designed to inspire your next meal. 
            From weeknight dinners to holiday feasts, we've got you covered.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="space-y-16">
          {groupedCollections.map((group, groupIndex) => (
            <div 
              key={groupIndex}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {group.map((collection, index) => {
                // For each group, reverse the order for the second item
                const isReversed = index === 1;
                
                return (
                  <motion.div
                    key={collection.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="overflow-hidden border-0 shadow-lg"
                    >
                      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className="lg:w-1/2 relative">
                          <img
                            src={collection.image}
                            alt={collection.name}
                            className="w-full h-64 lg:h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                        </div>
                        
                        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                          <h2 className="text-2xl font-bold mb-3">{collection.name}</h2>
                          <p className="text-gray-600 mb-4">
                            {collection.recipeCount} curated recipes
                          </p>
                          <p className="mb-6">
                            Explore our {collection.name.toLowerCase()} collection for delicious recipes 
                            that will inspire your cooking and delight your taste buds.
                          </p>
                          <Link 
                            to={`/collections/${collection.id}`}
                            className="text-savora-500 font-medium hover:underline"
                          >
                            View Collection →
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
        
        {/* Featured Collection */}
        <div className="mt-16 relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2400" 
            alt="Seasonal Favorites" 
            className="w-full h-96 object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Seasonal Favorites</h2>
            <p className="text-lg mb-6 max-w-2xl">
              Explore our handpicked recipes that highlight the best seasonal ingredients and flavors.
            </p>
            <Link 
              to="/collections/seasonal-favorites"
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
