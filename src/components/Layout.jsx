import Brand from "./Brand";
// import Footer from "./";
import NavBar from "./NavBar";
import "./Styles/Layout.css";

export default function Layout ({ children }) {
  return (
      <div className="layoutContainer">
        <div className="headerWrapper">
          <Brand />
          <NavBar />
        </div>
        <main className="mainContainer">
        {children}
        </main>
        {/* <Footer /> */}
      </div>
  )
}