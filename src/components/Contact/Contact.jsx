import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    e.preventDefault();
    if (name.length == 0) {
      alert("Enter Name");
      return;
    }
    if (!email.match(emailPattern)) {
      alert("Invalid Email");
      return;
    }
    if (message.length == 0) {
      alert("Write Something in Message!");
      return;
    }

    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICEKEY, import.meta.env.VITE_EMAILJS_TEMPLATEKEY,
        {
            name: name,
            email: email,
            message: message
        },
        import.meta.env.VITE_EMAILJS_PUBLICKEY)
      .then(
        () => {
          console.log('EMAIL SENT SUCCESSFULLY... :)');
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log('FAILED TO SENT EMAIL...', error);
        },
      );


  };

  return (
    <div className="contact">
      <div className="contact-social-links">
        <h1 style={{ marginBottom: "1rem", fontSize: "160%" }}>
          Connect With Me On
        </h1>

        <div className="contact-social-links-lvl">
          <div className="contact-logo-container">
            <a href="https://www.github.com/Aamir041" target="_blank">
              {<BiLogoGithub className="contact-logo" />}
            </a>
          </div>
          <div className="contact-logo-container">
            <a
              href="https://www.linkedin.com/in/aamir-saudagar-31422414a/"
              target="_blank"
            >
              {<BiLogoLinkedin className="contact-logo" />}
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <div className="contact-feild">
          <p>What's your name ?</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Jhone Doe"
          />
        </div>
        <div className="contact-feild">
          <p>Where can I reach you ?</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="jhondoe@xyz.com"
          />
        </div>
        <div className="contact-feild">
          <p>What's your message ?</p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id=""
            cols="30"
            rows="7"
            value={message}
            placeholder="Hi Aamir. let's work!"
          ></textarea>
        </div>

        <div className="pushable">
          <button className="front" type="submit" onClick={handleForm}>
            Send it
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
