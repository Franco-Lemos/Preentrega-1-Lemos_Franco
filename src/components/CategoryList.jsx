import "./Styles/CategoryList.css";
import { NavLink } from "react-router-dom";

const MY_ROUTES = [{
  path: "/",
  label: "Inicio"
},{
  path: "/category/ropa",
  label: "Ropa"
},{
  path: "/category/libros",
  label: "Libros"
},{
  path: "/category/funko-pop",
  label: "Funko-Pop"
},{
  path: "/category/baratijas",
  label: "Baratijas"
},]

function CategoryList(){
  return (
    <nav>
      <ul className="CategoryList">
      {MY_ROUTES.map((route) => (
        <li>
          <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to={route.path}
          >
          {route.label}
          </NavLink>
        </li>
      ))}
      </ul>
    </nav>
  );
}

export default CategoryList;