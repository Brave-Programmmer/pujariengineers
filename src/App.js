import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { 
  BrowserRouter ,Switch, Route} from "react-router-dom";
import error from "./Components/error";
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Products" component={Products}/>
      <Route component={error}/>
  </Switch>
  <Footer/>
    </BrowserRouter>
  </>
)
}

export default App;
