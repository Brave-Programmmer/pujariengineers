import "../About.css";
// import ADAPTER from "../ADAPTER.png";
// import ma from "../ma.png";
// import mc from "../mc.png";
// import MIX from "../MIX.png";
import MATERIALBROCHURE from "../MATERIALBROCHURE.pdf";
import { 
  Link,
 } from "react-router-dom";
// import {
// BrowserRouter as Router,
// Link
// } from "react-router-dom";
function Products() {
return (
<>

 
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 header">Some Images of our Products</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base header">For more details contact us : SANDEEP D. PUJARI, on our email id :spujari79@gmail.com<br/>
          or call us on 9820027556/9820027546</p>
    </div>
      {/* <img alt="gallery" className="pro" width="500px" height="550px" src={ma}/>
      <img alt="gallery" class="pro1" src={MIX}/>
      <img alt="gallery" class="" src={ADAPTER}/> */}
{/* <Link to={MATERIALBROCHURE}>
</Link> */}
{/* <script>
document.getElementsByClassName("bro").zoom = 75;
</script> */}
<iframe className="bro" src={MATERIALBROCHURE}></iframe>
  </div>
</section>
  {/* <div id="products">
        <h1 className="header">Brochure</h1>
        <p><img  className="center-img"src="https://i.ibb.co/X4FBm1s/1OtWckMu.jpg" alt="1OtWckMu" id="my"/>
          <img  className="center-img"src="https://i.ibb.co/p4vfDMj/1OtBVaSt.jpg" alt="1OtWckMu" id="my"/>
          <img  className="center-img"src="https://i.ibb.co/vZc79XL/1OtuOrlJ.jpg" alt="1OtuOrlJ"id="my"/>
        </p>
      </div> */}
      
</>
)
}

export default Products;