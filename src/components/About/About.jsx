import "./About.css"

import myImg from "../../assets/aamir.jpg"
import SkillCard from "../../lib/SkillCard/SkillCard";
import LeetcodeStat from "../LeetcodeStat/LeetcodeStat";

const About = () => {

    return (
        <div className="about">
            <div className="about--intro">
                <div className="about--info">
                    <h1>Who Am I ?</h1>
                    <p>
                        Hello everyone, I am Aamir a web developer who loves to create and beautify websites.
                    </p>
                    <p>
                        Currently I am in my Final Year at MIT ADT University
                    </p>
                    <p>
                        Currenty I am Learning MERN stack and PHP. 
                    </p>
                    <p>
                    I am Interested in Open Source and Devops.
                    </p>
                    <p>
                        Ask me anything about DSA and Javascript
                    </p>
                </div>

                <div className="about--myImg">
                    <img src={myImg} alt="Aamir Saudagar" />
                </div>
            </div>

            <div className="about--myskills">
                <h1>My Skills</h1>
                <SkillCard />
            </div>

            <div className="about--myskills">
                <h1>Leetcode Stat</h1>
                <LeetcodeStat />
            </div>


        </div>
    )
}

export default About; 