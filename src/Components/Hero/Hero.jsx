import "./Hero.css";
import me from "../../assets/LS20250627141727.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={me} alt="Me" />
      <h1>
        <span className="name">I'm Raviraj Mohite</span>, a{" "}
        <span className="bounce delay0">P</span>
        <span className="bounce delay1">a</span>
        <span className="bounce delay2">s</span>
        <span className="bounce delay3">s</span>
        <span className="bounce delay4">i</span>
        <span className="bounce delay5">o</span>
        <span className="bounce delay6">n</span>
        <span className="bounce delay7">a</span>
        <span className="bounce delay8">t</span>
        <span className="bounce delay9">e</span>{" "}
        Frontend Developer
      </h1>

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
