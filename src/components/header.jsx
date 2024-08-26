import logo from "../images/logo.jpg"; // Import the image directly if using a bundler like Webpack
import red from "../images/red.png";
import green from "../images/green.jpeg";
import cart from "../images/cart.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md h-[100px] px-4 ">
      <div>
        <Link to={"/body"}>
          <img className="w-20 h-22" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex p-14 gap-12">
        <Link>
          <p className="hover: cursor-pointer">Top-Rated</p>
        </Link>
        <Link>
          <p className="hover: cursor-pointer">Category</p>
        </Link>
        <Link>
          <p className="hover: cursor-pointer">Filter</p>
        </Link>
        <Link to={"/about"}>
          <p className="hover: cursor-pointer">About-Us</p>
        </Link>
        <div className="flex gap-4 items-center">
          <p>online</p>
          <img className="w-4 h-4" src={green} />
        </div>
      </div>
      <div className=" flex items-center p-14 gap-0 hover: cursor-pointer">
        <Link to={"/cart"}>
          <img className="w-9" src={cart} />
        </Link>
        <p>0</p>
      </div>
    </div>
  );
};

export default Header;
