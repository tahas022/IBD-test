import React from "react";
import "../styles/OurServices.css";
import BDP from "../images/BDP.jpg";
import ConstructionServices from "../images/constructionservices.jpg";
import galaxy from "../images/galaxy.jpg";

export default function OurServices() {
  return (
    <div className="servicesContainer">
      <section>
        <img className="servicesBG" alt="Background" src={BDP} />
        <h1 className="serviceHeader">Here at IBD, we offer 3 services...</h1>
        <h1 className="mainTopic">Design, Permit and Build</h1>
        <p1 className="mainTopicText">
          Design & Build Construction is a fast-growing project delivery system
          gaining a wide spread traction in the Canadian Construction industry.
          It is a streamlined method to deliver a project more effectively and
          its cost-efficient to the client .The contractor will handle the whole
          project from the design phase to the ultimate completion. Our Team
          provides clients with a single point of responsibility to effectively
          minimize risks, increase efficiency and reduce the project delivery
          timeline by overlapping the design and construction phases, helping
          you open your doors faster for less.
        </p1>
        <p1 className="mainTopicText2">
          Unlike the traditional construction method where the client would meet
          with the designer on one end and the contractor on the other end.
          Design-Build Contracting provides benefits to commercial business
          owners as it gives the owner the ability to choose a single company to
          bear the full responsibility for the design, construction, and
          commissioning of their commercial project.
        </p1>
        <p1 className="mainTopicText3">
          This eliminates inefficiency in the project and streamlines the whole
          construction experience. At IBD Constructions, we collaborate with our
          own design team to provide our clients with the highest quality
          service.
        </p1>
        <p1 className="mainTopicText4">
          Benefits of design and build Construction: Faster delivery, Cost
          savings, Higher Quality service ,Better Quality Project ,Singular
          Responsibility, Reduced Administrative Burden, Reduced Risk, Better
          Quality Control, Reduced Design Time, Efficient Budget management.
        </p1>
      </section>
      <section>
        <img
          className="cservicesBG"
          alt="Background"
          src={ConstructionServices}
        />
        <h1 className="mainTopic2">Construction</h1>
        <h1 className="mainTopic2h">General Contracting</h1>
        <p1 className="mainTopic2Text1">
          We pride ourselves on our reputation, and will go above and beyond the
          call of duty to ensure our clients leave happy and satisfied. Within
          our General construction service team, we have a complete in-house
          full service team of designers, construction project managers,
          tradesmen, value engineers, architectural experts and administrative
          staff to provide the highest level of quality and experience in this
          field.
        </p1>
        <p1 className="mainTopic2Text2">
          We are also are proud to leverage our own reputable network of
          qualified sub-contractors, who have been extensively trained to ensure
          that their work is of the highest quality and functionality to give
          our clients the best value for their money. We deliver high-quality
          construction projects for both local and international franchises in
          multiple industries
        </p1>
        <h1 className="mainTopic2h2">Ground Up Development</h1>
        <p1 className="mainTopic2Text3">
          Ground up Development is where the project starts from an undeveloped
          piece of land to a complete functional building. The ground up
          development function is complex and requires a vivid understanding of
          the location, the business needs and specific functional requirements.
          Our team of experts is well equipped to handle the entire process from
          obtaining the necessary permits in the shortest time possible and
          ensuring the project is up and running with in the required timeframe.
          IBD Constructions will seamlessly deliver without a doubt and will be
          with you every step of the way.
        </p1>
        <h1 className="mainTopic2h3">Exterior and Interior Fit Ups</h1>
        <p1 className="mainTopic2Text4">
          We are a leading commercial exterior & Interior Fit ups service
          Provider. We have a detailed and extensive portfolio of our past and
          present projects. We are proud to have both large and small scale
          organizations as part of our client portfolio. We work with multiple
          Franchises and coordinate with approved FF&E suppliers. We deliver
          full turnkey projects to our Customers.
        </p1>
      </section>
      <section>
        <img className="pmservicesBG" alt="Background" src={galaxy} />
        <h1 className="mainTopic3">Project Management</h1>
        <p1 className="mainTopic3Text">
          We at IBD Constructions is a Licensed, Bonded and Insured Company
          ,that is well equipped with all of the necessary staff and experience
          to manage and oversee complete construction. From Senior Project
          Managers to experienced Administration staff, when you work with IBD
          Constructions rest assured your project will be initiated, planned and
          executed right from conception to completion. We incorporate
          technology in Project management through the use of our latest
          softwares to plan and coordinate projects. We give our Clients access
          to monitor the ongoing project closely at each stage with real time
          pictures.
        </p1>
      </section>
    </div>
  );
}
