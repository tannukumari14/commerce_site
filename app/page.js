"use client"
import Navbar from "./Navbar";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import Footer from "./Footer"
const page=()=>{
  return(
    <div>
      <Navbar/><br />
      <Home/><br />
      <Footer/><br />
    </div>

  )
}
export default page;

