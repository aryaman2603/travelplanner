import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import heroImage from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
const heroImage = "https://planitright.vercel.app/assets/12.jpg";
function Home (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={heroImage}
        title="Your All-In-One Travel Planner"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default Home;