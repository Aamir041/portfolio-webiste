import "./Contact.css"

import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi"

const Contact = () => {
    return (
        <div className="contact">

            <form className="contact-form">
                <div className="contact-feild">
                    <p>What's your name ?</p>
                    <input type="text" placeholder="Jhone Doe" />
                </div>
                <div className="contact-feild">
                    <p>Where can I react you ?</p>
                    <input type="email" placeholder="jhondoe@xyz.com" />
                </div>
                <div className="contact-feild">
                    <p>What's your message ?</p>
                    <textarea name="" id="" cols="30" rows="7" placeholder="Hi Aamir. let's work!" ></textarea>
                </div>

                <div className="contact-send-bttn">
                    <button >
                        Send it
                    </button>
                </div>


            </form>

            <div className="contact-social-links">

                <h1 style={{ marginBottom: "1rem" }}>Connect With Me On</h1>

                <div className="contact-social-links-lvl">
                    <div className="contact-logo-container">

                        <a href="https://www.github.com/Aamir041" target="_blank">
                            {<BiLogoGithub className="contact-logo" />}
                        </a>
                    </div>
                </div>

                <div className="contact-social-links-lvl2 contact-social-links-lvl">
                    <div className="contact-logo-container">
                        <a href="https://www.linkedin.com/in/aamir-saudagar-31422414a/" target="_blank">{<BiLogoLinkedin className="contact-logo" />}
                        </a>

                    </div>

                    <div className="contact-logo-container">
                        <a href="https://twitter.com/54ud_" target="_blank">{<BiLogoTwitter className="contact-logo" />}
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact; 