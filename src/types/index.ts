
export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  category: string;
  author?: string;
  nutritionInfo?: NutritionInfo;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  recipeCount: number;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  recipeCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  savedRecipes: string[];
  uploadedRecipes: string[];
  favoriteCategories: string[];
}
