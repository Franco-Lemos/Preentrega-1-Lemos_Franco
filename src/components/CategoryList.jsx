import "./Styles/CategoryList.css";
import { NavLink } from "react-router-dom";

const MY_ROUTES = [{
  path: "/inicio",
  label: "Inicio"
},{
  path: "/productos",
  label: "Productos"
},{
  path: "/ubicación",
  label: "Ubicación"
},{
  path: "/pedidos",
  label: "Pedidos"
},{
  path: "/contactos",
  label: "Contactos"
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