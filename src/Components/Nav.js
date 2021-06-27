import React from "react";
import "../Nav.css";
import logo from "../logo.png";
import { 
  Link,
 } from "react-router-dom";
function Nav() {
  return (
<>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-15 h-20 text-white p-2 rounded-full" src={logo}/>
      <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 header">Pujari Engineers India Pvt Ltd <br></br> Balaji Services</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to="/"className="mr-5 hover:text-gray-900 cursor-pointer hover">Home</Link>
      <Link to="/products" className="mr-5 hover:text-gray-900 cursor-pointer hover">Products</Link>
      <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer hover" >About Us</Link>
    </nav>
  </div>
</header>

  </>
)
}

export default Nav;
