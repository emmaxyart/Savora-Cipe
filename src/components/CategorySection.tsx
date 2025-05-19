
import { Link } from "react-router-dom";
import { Category } from "@/types";

const categories: Category[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H2v7c0 3 2 5 5 5h6c3 0 5-2 5-5V2Z"></path>
        <path d="M18 15v7"></path>
        <path d="M18 2v7c0 3 2 5 5 5"></path>
        <path d="M22 2v7"></path>
      </svg>
    ),
    recipeCount: 150
  },
  {
    id: "lunch",
    name: "Lunch",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10h10V2Z"></path>
        <path d="m4.93 12.93 4.14 4.14"></path>
        <path d="M2 17.07A7.07 7.07 0 0 1 9.07 10"></path>
        <path d="M14 22h7a1 1 0 0 0 1-1v-1a6 6 0 0 0-6-6h-3"></path>
        <path d="M18 12V2"></path>
        <path d="M18 8h4"></path>
      </svg>
    ),
    recipeCount: 200
  },
  {
    id: "dinner",
    name: "Dinner",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
        <path d="M7 2v20"></path>
        <path d="M21 15V2"></path>
        <path d="M18 15V2"></path>
        <path d="M18 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"></path>
      </svg>
    ),
    recipeCount: 180
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3a5 5 0 0 1-1-3 2.5 2.5 0 0 1 5 0 5 5 0 0 1-1 3c-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5"></path>
        <path d="M12 16v5"></path>
        <path d="M8 22h8"></path>
      </svg>
    ),
    recipeCount: 120
  },
  {
    id: "quick-meals",
    name: "Quick Meals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    recipeCount: 100
  },
  {
    id: "healthy",
    name: "Healthy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
      </svg>
    ),
    recipeCount: 160
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10">Featured Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/categories/${category.id}`} 
              key={category.id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-savora-100 rounded-full flex items-center justify-center text-savora-500 mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.recipeCount}+ Recipes</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
