import React from "react";
import "../styles/Project.css";
import projectbg from "../images/projectbg.png";
import CPimage1 from "../images/CPimage1.jpg";
import CPimage2 from "../images/CPimage2.jpg";
import CPimage3 from "../images/CPimage3.jpg";
import CPimage4 from "../images/CPimage4.jpg";
import CPimage5 from "../images/CPimage5.jpg";

export default function Projects() {
  return (
    <div className="projectContainer">
      <section>
        <img className="projectbg" alt="projectbg" src={projectbg} />
        <h1 className="projectbgH">Our Projects</h1>
      </section>
      <section className="section">
        <h1 className="pheader">Some of our main projects include:</h1>
        <img className="pic1" alt="Background" src={CPimage1} />
        <img className="pic2" alt="Background" src={CPimage2} />
        <img className="pic3" alt="Background" src={CPimage3} />
        <img className="pic4" alt="Background" src={CPimage4} />
        <img className="pic5" alt="Background" src={CPimage5} />
        <p1 className="pic1Text">This is the guelph plaza</p1>
        <p1 className="pic2Text">This is Hyatt place</p1>
        <p1 className="pic3Text">This is Brockville plaza</p1>
        <p1 className="pic4Text">This is Inspiration Tower</p1>
        <p1 className="pic5Text">This is Esso Gas Station</p1>
      </section>
    </div>
  );
}
