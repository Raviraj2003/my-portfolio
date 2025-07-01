import React from "react";
import "./Skills.css";
import Htmllogo from "../../assets/HTML5_logo.svg";

const Skills = () => {
  const totalItems = 10;

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": totalItems }}>
        {Array.from({ length: totalItems }, (_, index) => (
          <div
            className="item"
            key={index}
            style={{ "--position": index + 1 }}
          >
            <img src={Htmllogo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Skills;
