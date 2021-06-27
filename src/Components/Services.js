import "../About.css";
import award from "../award.jpg";
import servn from "../servn.jpg";
import servo from "../servo.jpg";
import servoo from "../servoo.jpg";
import {
BrowserRouter as Router,
Link  
} from "react-router-dom";
function Services() {
return (
<>
{/* <div id="services">
        <h1>Image of our Services</h1>
        
          <img src="https://i.ibb.co/8xrf69J/11.jpg" width="400px" height="550px" id="my"/>
          <img src="https://i.ibb.co/dJ72Xxv/12.jpg" width="400px" height="550px" id="my"/>
        <img src="https://i.ibb.co/RgjzDcH/13.jpg" width="500px" height="490px" id="my"/>
        
      </div> */}
     <section>

   
      <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Award</h1>

    <img alt="gallery" class="width" src={award}/>
    <div className="row">
  <div className="column">
  {/* <img src="https://i.ibb.co/8xrf69J/11.jpg" height="550px" id="my"/> */}
  </div>
  <div class="column">
  {/* <img className="img_ser"src="https://i.ibb.co/RgjzDcH/13.jpg" height="550px" id="my"/> */}
  <h1>Before</h1>
  <img className="img_ser float-right"src={servo} height="600px" width="50%" id="my"/>
  <img className="img_ser"src={servoo} height="600px" width="50%" id="my"/>
  <img className="object-cover h-full object-center block"src={servn} height="600px" width="50%" id="my"/>

  </div>

</div>
        {/* <img src="https://i.ibb.co/8xrf69J/11.jpg" width="50%" height="550px" id="my"/> */}
          {/* <img src="https://i.ibb.co/dJ72Xxv/12.jpg" width="500px" height="550px" id="my"/> */}
        {/* <img src="https://i.ibb.co/RgjzDcH/13.jpg" width="50%" height="550px" id="my"/> */}
      

</section>
</>
)
}

export default Services;