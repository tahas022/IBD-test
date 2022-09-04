import React, { Component } from "react";
import "../styles/Home.css";
import construction from "../images/construction.jpg";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <section className="bg-text">
          <img
            className="bg1"
            alt="Background"
            src={construction}
            width="2560"
            height="1171"
          />
        </section>
        <section>
          <h1 className="header">Company Overview</h1>
          <button className="button1">About IBD</button>
          <button className="button2">Our Clients</button>
          <button className="button3">Corporate Portfolio</button>
          <button className="button4">Corporate Philosophy</button>
          <h1 className="headerS">Our Services</h1>
          <button className="button5">Design Permit & Build</button>
          <button className="button6">Construction</button>
          <button className="button7">Project Management</button>
        </section>
      </div>
    );
  }
}

export default Home;
