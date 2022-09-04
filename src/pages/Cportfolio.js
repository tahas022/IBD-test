import React from "react";
import "../styles/Cportfolio.css";
import CPbg from "../images/CPbg.jpg";
import CP1 from "../images/CP1.jpg";
import CP2 from "../images/CP2.jpg";
import CP3 from "../images/CP3.jpg";
import CP4 from "../images/CP4.jpg";

export default function Cportfolio() {
  return (
    <div className="portfolioContainer">
      <section>
        <img className="CPbg" alt="Background" src={CPbg} />
        <h1 className="portTitleHeader">Our Corporate Portfolio</h1>
      </section>
      <section>
        <h1 className="portMainHeader">
          Here at IBD, our portfolio is stacked with only the best
        </h1>
        <img className="CP1" alt="Pic" src={CP1} />
        <p1 className="CP1Text">
          At IBD Constructions We provide the crew and manage all contracts with
          suppliers and subcontractors. Using inhouse design plans, drawings and
          specifications, our skilled team will bring your project to reality
          within your budget and on time.
        </p1>
        <img className="CP2" alt="Pic" src={CP2} />
        <p1 className="CP2Text">
          We have a winning formula: We have longstanding relationships with
          subcontractors and suppliers and their one hundred percent
          cooperation.
        </p1>
        <img className="CP3" alt="Pic" src={CP3} />
        <p1 className="CP3Text">
          Our professionals work with you to envision, plan and build. From
          conception to completion, we deliver peace of mind and pride of
          ownership.
        </p1>
        <img className="CP4" alt="Pic" src={CP4} />
        <p1 className="CP4Text">
          Bring us in at the pre-construction phase, and take advantage of our
          considerable expertise to define scope, timeline and budgets. There's
          never enough time or money. That's where an expert contractor can add
          a lot of value, taking on your toughest construction challenges,
          tackling impossible deadlines, and maximizing even the most modest
          budgets. Whether it's a new construction or large renovation project,
          IBD Construction has the tools, the people, and the know-how to get
          the job done on time and on budget.
        </p1>
      </section>
    </div>
  );
}
