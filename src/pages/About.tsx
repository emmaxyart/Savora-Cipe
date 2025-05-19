
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1080",
      bio: "Alex has over 15 years of culinary experience in top restaurants across the country."
    },
    {
      name: "Jamie Chen",
      role: "Recipe Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080",
      bio: "Jamie specializes in creating simple yet delicious recipes that anyone can make at home."
    },
    {
      name: "Taylor Reed",
      role: "Nutrition Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1080",
      bio: "Taylor ensures all our recipes are balanced and provides detailed nutritional information."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2400" 
            className="w-full h-full object-cover brightness-50"
            alt="Kitchen"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Savora</h1>
          <p className="text-xl max-w-2xl">
            Bringing delicious recipes to home cooks everywhere, helping you discover 
            new flavors and techniques for your kitchen.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Savora was founded in 2023 with a simple mission: to make cooking at home more 
              accessible, enjoyable, and delicious for everyone.
            </p>
            <p className="mb-4">
              Our team of passionate chefs, food enthusiasts, and nutrition experts work together 
              to create and curate recipes that inspire home cooks of all skill levels.
            </p>
            <p>
              We believe that good food brings people together, and we're dedicated to helping you 
              create memorable meals for yourself, your family, and your friends.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745adc4b?q=80&w=2400" 
              alt="Team cooking together" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-savora-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To inspire home cooks with accessible recipes, quality ingredients, 
              and the confidence to create delicious meals.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p>
              Authenticity in flavors, inclusivity in cuisines, sustainability in 
              practices, and joy in the cooking process.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
            <p>
              Well-tested recipes, clear instructions, honest ingredient lists, and 
              responsive support for your cooking journey.
            </p>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Cooking?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our collection of recipes and find your next favorite meal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/recipes">Browse Recipes</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/categories">Explore Categories</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
