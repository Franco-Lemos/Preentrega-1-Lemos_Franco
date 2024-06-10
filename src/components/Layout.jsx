import Brand from "./Brand";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Styles/NavBar.css"

export default function Layout ({ children }) {
  return (
      <div className="layoutContainer">
        <header class="sticky-top">
          <nav id="navbar" className="navbar headerWrapper">
              <Brand />
              <NavBar />
          </nav>
        </header>
        <main className="mainContainer">
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
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