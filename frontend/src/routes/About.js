import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg="/assets/night.jpg"
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
}

export default About;