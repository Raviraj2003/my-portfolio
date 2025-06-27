import "./Hero.css";
import me from "../../assets/LS20250627141727.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={me} alt="Me" />
      <h1><span>I'm Raviraj Mohite</span>, a Passionate Frontend Developer</h1>
      <p>
        Passionate about creating smooth, user-friendly web experiences with a
        modern touch.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>

      </div>
    </div>
  );
};

export default Hero;
