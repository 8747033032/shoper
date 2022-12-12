
import './App.css';
import Header from"./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact  from './components/Contact';
import Products from "./components/Products";
import ProductsDet from './components/Productsdet';
import About from "./components/About";
import {  Redirect,  Switch, Link } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


  
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Products/>
    <hr/>
    <About/>
    <hr/>
    {/* <ProductsDet/>  */}
    <Contact/> 
    <BrowserRouter>
   
    <Switch> 
      <Router exact path="/"  componentsz={Home}></Router>

   <Router exact path="/Products" components={Products}></Router>
   <Router exact path="/ProductsDet" components={ProductsDet}></Router>
     <Router exact path="/About"  components={About}></Router>
     <Router exact path="/Contact"  components={Contact}></Router>
       <Redirect exact path="/" ></Redirect>
       </Switch>
      
      </BrowserRouter>
    <Footer/>
     </>
  );
}

export default App;
