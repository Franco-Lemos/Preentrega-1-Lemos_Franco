import "./Styles/CategoryList.css";
import { NavLink } from "react-router-dom";

const MY_ROUTES = [{
  path: "/inicio",
  label: "Inicio"
},{
  path: "/category/indumentaria",
  label: "Ropa"
},{
  path: "/category/libros",
  label: "Libros"
},{
  path: "/category/funko-pop",
  label: "Funko-Pop"
},{
  path: "/category/coleccionables",
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