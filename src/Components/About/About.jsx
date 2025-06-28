import React from "react";
import "./About.css";
import me from "../../assets/LS20250627141727.png"; // Update the path to your image

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={me} alt="Me" />
        </div>
        <div className="about-description">
          <p>
            I am a passionate frontend developer with a love for creating
            interactive and user-friendly web applications. My journey in web
            development began with a curiosity for how things work, and it has
            evolved into a full-fledged career.
          </p>
          <p>
            I enjoy working with the latest technologies and frameworks to build
            responsive and performant web applications. My goal is to deliver
            seamless user experiences while continuously improving my skills.
          </p> 

          <div className="about-skills">
            <p className="about-skill">HTML & CSS <hr style={{ width: "70%" }} /></p>
            <p className="about-skill">JavaScript <hr style={{ width: "50%" }} /></p>
            <p className="about-skill">React <hr style={{ width: "60%" }} /></p>
            <p className="about-skill">.Net <hr style={{ width: "40%" }} /></p>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement"><h1>4</h1><p>Years Of Experiance</p></div> <hr />
        <div className="about-achivement"><h1>9</h1><p>Project Completed</p></div>
        
      </div>
    </div>
  );
};

export default About;
