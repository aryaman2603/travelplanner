import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import ContactImage from "../assets/photo-1500835556837-99ac94a94552.avif";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
//const ContactImage = "/photo-1500835556837-99ac94a94552.avif";

function Contact (){
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid" 
        heroImg="/assets/photo-1500835556837-99ac94a94552.avif" 
        title="Contact"
        btnClass="hide"/>
        <ContactForm/>
        <Footer/>
        </>
    );
}

export default Contact;