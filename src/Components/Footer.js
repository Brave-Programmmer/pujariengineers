import "../About.css";
import "../Home.css";
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <>
      <br/>
      <br/>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="">Pujari Engineers India Pvt Ltd & <br/>Balaji Services</span>
    </a>
    <div class="flink text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Useful Links</h2>
      <Link className="text-gray-600 hover:text-gray-800 " to="/">Home</Link><br/>
      <Link className="" to="/products">Products</Link><br/>
      <Link className="" to="/About">About Us</Link>
    </div>
    {/* <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2006 - Pujari Engineers India Pvt Ltd &<br/>© 2016 - Balaji Services 
    </p> */}
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    </span>
  </div>
</footer>
</>
    )
}
export default Footer;