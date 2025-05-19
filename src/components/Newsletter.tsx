
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, we would send this to an API
      console.log("Subscribing email:", email);
      toast.success("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-savora-500 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">Get Weekly Recipe Inspiration</h2>
        <p className="text-lg mb-8 opacity-90">Join our community of food lovers</p>
        
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-gray-800 border-0 focus-visible:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            className="bg-gray-900 hover:bg-gray-800 text-white"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
