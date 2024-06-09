import { Link } from 'react-router-dom';
import LogoIcon from "./LogoIcon";
import "./Styles/Brand.css"

function Brand() {
  return (
    <div>
      <Link to="/">
        <h1 className="Logo">
          <LogoIcon width={'100px'} height={'80px'} />
          <p className="LogoP">Tamriel</p>
        </h1>
      </Link>
    </div>
  );
}

export default Brand;