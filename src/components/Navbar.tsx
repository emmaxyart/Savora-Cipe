
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X, Command } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  const handleCommandK = () => {
    // This is just to show the user they can use Cmd+K
    // The actual implementation is in CommandMenu.tsx
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'k',
        metaKey: true,
        bubbles: true
      })
    );
  };

  return (
    <header className="w-full bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-savora-500 text-white p-2 rounded">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <motion.path 
                  d="M15 11h.01"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <motion.path 
                  d="M11 15h.01"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.2 }}
                />
                <motion.path 
                  d="M16 16h.01"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.4 }}
                />
                <motion.path 
                  d="m2 16 20 6-6-20A20 20 0 0 0 2 16"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                />
                <motion.path 
                  d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
              </svg>
            </div>
            <span className="text-xl font-bold">Savora</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-savora-500 transition-colors">Home</Link>
          <Link to="/recipes" className="font-medium hover:text-savora-500 transition-colors">Recipes</Link>
          <Link to="/categories" className="font-medium hover:text-savora-500 transition-colors">Categories</Link>
          <Link to="/collections" className="font-medium hover:text-savora-500 transition-colors">Collections</Link>
          <Link to="/about" className="font-medium hover:text-savora-500 transition-colors">About</Link>
        </nav>

        {/* Search & Profile */}
        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search recipes..." 
              className="pl-10 w-[200px] focus-visible:ring-savora-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 flex items-center gap-1 pointer-events-none">
              <Command size={12} />
              <span>K</span>
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User size={20} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden py-4 px-4 bg-white border-t overflow-hidden"
        >
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-savora-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/recipes" className="font-medium py-2 hover:text-savora-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Recipes</Link>
            <Link to="/categories" className="font-medium py-2 hover:text-savora-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/collections" className="font-medium py-2 hover:text-savora-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="font-medium py-2 hover:text-savora-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
