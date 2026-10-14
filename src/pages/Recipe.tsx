import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { Recipe } from "../types/Recipes";

function RecipePage() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        const getSingleRecipe =async ()=>{
            try {
                setLoading(true);
                const resopnse = await fetch(`https://dummyjson.com/recipes/${id}`);
                if(resopnse.status !== 200){
                    return setRecipe(null)
                }
                const data = await resopnse.json();
                setRecipe(data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        }

        getSingleRecipe();
    },[id])
  return (
    <>
        {loading && <p>Recipe is loading ..</p>}
        {!loading && !recipe && <p>No recipe found.</p>}
        {!loading && recipe && 
            <main className="grid grid-cols-2 gap-5">
                <div>
                    <img src={recipe.image} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold">{recipe.name}</h2>
                    <p className="text-sm font-medium">{recipe.difficulty}</p>
                    <p className="text-xs font-medium">{recipe.rating}</p>
                    <div>
                        <p className="font-medium mb-2">Ingredients</p>
                        <ol className="list-decimal ps-6">
                            {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
                        </ol>
                    </div>
                    <div>
                        <p className="font-medium mb-2">Instructions</p>
                        <ol className="list-decimal ps-6">
                            {recipe.instructions.map((ing, index) => <li key={index}>{ing}</li>)}
                        </ol>
                    </div>
                </div>
            </main>
        }
    </>
    );
}

export default RecipePage