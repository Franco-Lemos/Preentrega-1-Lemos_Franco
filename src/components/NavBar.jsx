import { useContext } from "react";
import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import CartContext from "../context/CartContext";
import "./Styles/NavBar.css"

function NavBar() {
  const { cart } = useContext(CartContext);

  return(
    <div id="navbar" className="NavBarWrapper">
      <CategoryList />
      <div className={`${cart.length === 0 ? "hidden" : ""}`}>
        <CartWidget />
      </div>
    </div>
  )
}

function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

export default NavBar;