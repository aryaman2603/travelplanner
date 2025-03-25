import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import ServicesImage from "../assets/services.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
//const ServicesImage = "/services.jpg"
function Services (){
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid" 
        heroImg="/assets/services.jpg"
        title="Services"
        btnClass="hide"/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default Services;