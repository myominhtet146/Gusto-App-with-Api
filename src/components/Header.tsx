import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex items-center justify-between font-serif my-10 border-b border-b-gray-400 py-3">
        <NavLink to={"/"} className="text-4xl font-bold">GUSTO</NavLink>
        <div className="flex gap-3 text-lg font-medium items-center text-gray-500">
            <NavLink to={"/"} className={({isActive})=> (isActive ? "text-black" : undefined)}>Recipes</NavLink>
            <NavLink to={"/about"} className={({isActive})=> (isActive ? "text-black" : undefined)}>About</NavLink>
        </div>
    </nav>
  )
}

export default Header