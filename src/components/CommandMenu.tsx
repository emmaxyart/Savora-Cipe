
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { mockRecipes, mockCategories } from "@/data/mockData";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (value: string) => {
    setOpen(false);
    
    if (value.startsWith("recipe:")) {
      const recipeId = value.replace("recipe:", "");
      navigate(`/recipes/${recipeId}`);
    } else if (value.startsWith("category:")) {
      const categoryId = value.replace("category:", "");
      navigate(`/categories/${categoryId}`);
    } else if (value.startsWith("search:")) {
      const query = value.replace("search:", "");
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search recipes, categories..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Recipes">
          {mockRecipes.slice(0, 5).map((recipe) => (
            <CommandItem
              key={recipe.id}
              value={`recipe:${recipe.id}`}
              onSelect={handleSelect}
            >
              {recipe.title}
            </CommandItem>
          ))}
          <CommandItem value="search:" onSelect={() => {
            setOpen(false);
            navigate("/search");
          }}>
            View all recipes...
          </CommandItem>
        </CommandGroup>
        
        <CommandGroup heading="Categories">
          {mockCategories.map((category) => (
            <CommandItem
              key={category.id}
              value={`category:${category.id}`}
              onSelect={handleSelect}
            >
              {category.icon} {category.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
