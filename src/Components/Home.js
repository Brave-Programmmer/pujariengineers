import "../Home.css";
import {  BrowserRouter as Router,Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const usestyles = makeStyles({
  
    root:{
    background:'linear-gradient(395deg, #0096c7,#023e8a)',
    border:'0',
    borderRadius: '96px, 2px',
    color: 'white',
    padding:'0px, 30px'
  }
})
function ButtonStyledpro(){
  const classes = usestyles();
  return(
    <>
   <Button className={classes.root}><Link to="/products">Go to Products </Link></Button>
  </>
   )

}
function Home() {
    return (
<>
 <section className="background firstSection">
        <div className="box-main">
            <div className="firstHalf">
                <p className="text-big">Welcome to Pujari Engineers India Pvt Ltd & Balaji Services</p>
                {/* <p class="text-small">An Expert of Online Sealing</p> */}
            <ButtonStyledpro>

            </ButtonStyledpro>
            </div>
        </div>
    </section>
    <h1 className="header">
      <b className="text-center">
      Introduction
      </b>
    </h1>
    <p id="aa"><i>
      <b>
       We would like to introduce ourselves as India's one of the most reliable material supplier since decade. We  supply all types of Online leak sealing tools, materials and equipments including
          rubber products, complete tool kit of Online Leak Sealing as well as S-Wrap and all other requirements related to Online Leak Sealing Services within and outside India. An esteemed company from Iran is a great admirer and
          client of our's since several years. We have lots of Indian and foreign client of our's since years for material supply.
          </b>    
      </i>
      </p>
 </>
  )
  }
  
  export default Home;

  