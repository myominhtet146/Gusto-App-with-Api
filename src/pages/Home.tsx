import { useEffect, useState } from "react"
import type { Recipe } from "../types/Recipes";
import Card from "../components/Card";

function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    const getRecipes = async ()=>{
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/recipes?limit=8");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };

    getRecipes();
  },[])

  return (
    <>
      <h2 className="text-center text-5xl mb-10 font-bold font-serif">Our Menu</h2>
      <main className="grid grid-cols-4 gap-6 font-serif">
        {
          !loading ? (recipes.map((recipe) => <Card recipe={recipe} key={recipe.id}/>)
        ) : (
          <p>Recipes are loading...</p>
        )
        }
      </main>
    </>
  )
}

export default Home