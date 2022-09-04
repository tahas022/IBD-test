import React from "react";
import "../styles/Cphilosophy.css";
import galaxy from "../images/galaxy.jpg";

export default function Cphilosophy() {
  return (
    <div className="cPhilContainer">
      <section>
        <img className="cPhilBg" alt="galaxy" src={galaxy} />
        <h1 className="cPhilHeader">
          At IBD, We believe in having the highest respects in business
        </h1>
      </section>
      <section>
        <h1 className="cPhilMainH">Vision</h1>
        <p1 className="cPhilMainHText">
          We aim to be the leading pioneer in the Construction industry
          globally.
        </p1>
        <h1 className="cPhilMainH2">Mission Statement</h1>
        <p1 className="cPhilMainH2Text">
          “IBD promise to deliver high quality, cost effective projects on
          schedule by employing and supporting motivated, certified and focused
          teams."
        </p1>
        <p1 className="cPhilMainH2Text2">
          Our clients rely on our dependability, our drive and our integrity. We
          value the importance of relationship. We take great pride in our
          accomplishments and build on them every day.
        </p1>
        <h1 className="cPhilMainH3">Core Values</h1>
        <p1 className="cPhilMainH3H1">Leadership</p1>
        <p1 className="cPhilMainH3Text">
          Our leadership emphasizes on our ethics and integrity and executes a
          zero-tolerance approach to corruption.
        </p1>
        <p1 className="cPhilMainH3H2">Innovation</p1>
        <p1 className="cPhilMainH3Text2">
          We aim to promote and implement the latest industry trends in our
          projects to provide our clients with the highest quality and
          sustainability.
        </p1>
        <p1 className="cPhilMainH3H3">Teamwork</p1>
        <p1 className="cPhilMainH3Text3">
          Our people are our mechanisms that lead to our organizational success.
          We expedite their potential, encourage their performance and reward
          their achievements.
        </p1>
        <p1 className="cPhilMainH3H4">Success</p1>
        <p1 className="cPhilMainH3Text4">
          We value our success as an organization as it leads to the success of
          our stakeholders. Our ‘can-do’ approach results in building positive
          long-term relationships and partnerships.
        </p1>
      </section>
    </div>
  );
}
