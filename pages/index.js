import React from "react";
import Nav from "../components/nav.js";
import RoundedText from "../components/RoundedText";

const Home = ({ }) => (
  <div className="container">
    <Nav />
    <RoundedText />

    <style jsx>{`
      .container {
        max-width: 850px;
        width: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Home;
