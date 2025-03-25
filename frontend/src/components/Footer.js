import "./FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>PlanItRight</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                <a href="https://www.facebook.com">
                <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com">
                <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="https://www.behance.net">
                <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="https://x.com">
                <i className="fa-brands fa-twitter-square"></i>
                </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                <h4>Community</h4>
                <a href="https://github.com/aryaman2603/travelplanner">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                </div>
                <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/contact">Contact Us</a>
                </div>
                <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer