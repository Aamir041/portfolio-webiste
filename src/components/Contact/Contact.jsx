import { useState } from "react"
import "./Contact.css"

import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi"

import axios from "axios"

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleForm = (e) => {
        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        e.preventDefault();
        if(name.length == 0){
            alert("Enter Name");
            return;
        }
        if(!email.match(emailPattern)){
            alert("Invalid Email");
            return;
        }
        if(message.length == 0){
            alert("Write Something in Message!")
            return;
        }

        alert("Working on Backend :)");

        /*
        const url = "http://localhost/test/formsubmit.php"
        
        // putting data in form
        let fData = new FormData();
        fData.append('name',name);
        fData.append('email',email);
        fData.append('message',message);
        
        axios.post(url,fData)
        .then(respose => console.log(respose.data))
        .catch(error => console.log(error));
        */

    }

    return (
        <div className="contact">

            <form className="contact-form">
                <div className="contact-feild">
                    <p>What's your name ?</p>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Jhone Doe" />
                </div>
                <div className="contact-feild">
                    <p>Where can I react you ?</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="jhondoe@xyz.com" />
                </div>
                <div className="contact-feild">
                    <p>What's your message ?</p>
                    <textarea onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="7" placeholder="Hi Aamir. let's work!" ></textarea>
                </div>

                <div className="contact-send-bttn">
                    <button type="submit" onClick={handleForm}>
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