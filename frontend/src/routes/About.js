import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
const aboutImage = "/night.jpg";
function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={aboutImage}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
}

export default About;