import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import "./Styles/NavBar.css"

function NavBar() {
  return(
    <div className="NavBarWrapper">
      <CategoryList />
      <CartWidget />
    </div>
  )
}

export default NavBar;