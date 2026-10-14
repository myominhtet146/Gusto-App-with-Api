import type { Recipe } from "../types/Recipes"
import { Link } from "react-router"
type CardProps = {
    recipe : Recipe
}

function Card({recipe}:CardProps) {
  return (
    <Link to={`/recipes/${String(recipe.id)}`} className="bg-gray-100 p-4 rounded-md">
        <img src={recipe.image} alt="" className="rounded-md"/>
        <h2 className="text-xl font-bold my-2">{recipe.name.length > 17 ? recipe.name.substring(0,17) + "..." : recipe.name}</h2>
        <p className="text-sm font-medium">Difficulty - {recipe.difficulty}</p>
        <p className="text-sm font-medium">Rating - {recipe.rating}</p>
    </Link>
  )
}

export default Card