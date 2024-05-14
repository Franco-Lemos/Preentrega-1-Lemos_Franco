import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import "./Styles/NavBar.css"

function NavBar() {
  return(
    <div id="navbar" className="NavBarWrapper">
      <CategoryList />
      <CartWidget />
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