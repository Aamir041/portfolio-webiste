import "./Footer.css"
import {BiLogoGithub,BiLogoLinkedin,BiLogoTwitter} from "react-icons/bi"

const Footer = () =>{
    return(
        <div className="footer">
            <p>Copyright © 2024</p>
            <div className="footer-sociallinks">
                <a
                    href="https://www.github.com/Aamir041"
                    target="_blank"
                    >
                    {<BiLogoGithub className="footer-icon"/>}
                </a>
                <a href="https://www.linkedin.com/in/aamir-saudagar-31422414a/"
                target="_blank"
                >
                    {<BiLogoLinkedin
                    className="footer-icon"/>}
                </a>
            </div>
        </div>

    )
}

export default Footer;