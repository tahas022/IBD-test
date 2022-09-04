import React from "react";
import "../styles/AboutIBD.css";
import aboutbg from "../images/aboutbg.png";

export default function AboutIBD() {
  return (
    <div className="aboutContainer">
      <section>
        <h1 className="aboutIBDH1">Who Are We?</h1>
        <img className="aboutbg" alt="city" src={aboutbg} />
        <h1 className="aboutIBDH2">How IBD started</h1>
        <p1 className="HISIBDT">
          IBD Constructions is a Toronto based company founded in 2014. After
          our involvement in a wide array of projects, we have tremendously
          become a top notch expert in the field of General Construction and
          Project management. The company has gained experience in all different
          aspects of the construction industry throughout the years. Today, IBD
          Constructions has evolved into one of Toronto's and Ontario's leading
          full-service general contracting and project management firms. Our
          dynamic team and systematic approach to construction and project
          management has allowed us to grow as we all bear the same vision,
          passion and a desire to deliver the highest standard of quality for
          every project undertaken.
        </p1>
      </section>
    </div>
  );
}
