import "../About.css";
// import logo from "../logo.png";

function About() {
  return (
        <>
      <div id="aboutus text-center">
        <h1 className="header dropdown-item text-center">About us</h1>
        <div className="logo header">
      {/* <img className="center" src={logo} width="300px" height="400px"/> */}
 {/* <img src="https://i.ibb.co/5r837Y1/mohit.jpg" alt="">  */}
        </div>
        <p className="text-center mb"> Feel free to contact us : SANDEEP D. PUJARI, on our email id :spujari79@gmail.com<br/>
          or call us on 9820027556/9820027546
{/* <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/> */}

        {/* <footer>
          <small>© all copyrights under pujari engineers india pvt ltd and balaji
            services</small>
        </footer> */}
        </p>
      </div> 
      </>
)
}

export default About;
