import "./About.css";

import myImg from "../../assets/aamir.jpg";
import SkillCard from "../../lib/SkillCard/SkillCard";
import LeetcodeStat from "../LeetcodeStat/LeetcodeStat";

const About = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="about">
      <div className="about--intro">
        <div className="about--info">
          <h1>Who Am I ?</h1>
          <p>
            Greetings! I'm Aamir, a passionate web developer with a flair for
            crafting visually appealing and functional websites. Currently
            navigating the final year of my academic journey at MIT ADT
            University, I am immersed in the dynamic world of web development.
            My focus lies in mastering the MERN stack, and I'm also delving into
            the intricate realm of Blockchain technology.
          </p>
          <p>
            Currently, I am honing my skills as a backend developer intern at
            CDK Global, where I actively contribute to innovative projects and
            gain hands-on experience in the ever-evolving field of technology.
            My enthusiasm for Open Source and DevOps fuels my desire to stay at
            the forefront of industry trends and best practices.
          </p>
          <p>
            Feel free to throw any questions my way regarding Data Structures
            and Algorithms, as well as anything related to the fascinating world
            of JavaScript. I am on a continuous journey of growth and
            exploration, driven by the belief that technology has the power to
            reshape and enhance the way we experience the digital landscape.
            Let's connect and explore the possibilities together!
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
    </div>
  );
};

export default About;
