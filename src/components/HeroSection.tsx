
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background semi-transparent image overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070')" }}
      ></motion.div>
      
      <div className="container-custom h-full flex flex-col justify-center items-center relative z-10">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          Discover Your Next Favorite Recipe
        </motion.h1>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-center mb-10 max-w-2xl"
        >
          Explore thousands of delicious recipes from around the world
        </motion.p>
        
        <form onSubmit={handleSearch} className="w-full max-w-xl relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2" size={20} />
            <Input
              type="text"
              placeholder="Search for recipes, ingredients, or cuisines"
              className="w-full pl-12 py-6 rounded-full bg-white/90 text-gray-800 border-none text-lg focus-visible:ring-savora-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-savora-500 hover:bg-savora-600 text-white"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
