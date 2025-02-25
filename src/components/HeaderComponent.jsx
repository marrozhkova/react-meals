import { NavLink, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className="text-3xl font-bold underline bg-red-600 w-100 h-100"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-3xl font-bold underline bg-red-600 w-100 h-100"
        >
          About us
        </NavLink>
        <NavLink
          to="/meals"
          className="text-3xl font-bold underline bg-red-600 w-100 h-100"
        >
          Meals
        </NavLink>
      </nav>
    </>
  );
};
export default HeaderComponent;
