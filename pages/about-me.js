import React from "react";
import Nav from '../components/nav.js'

const Hakkimda = ({ }) => (
  <div>
    <Nav />
    <div className="container">
      <div className="m-12 md:mt-56 text-center">
        <p className="text-6xl">Selam, Ben Kuzey!</p>
        <p className="text-lg">
      </p>
      </div>

      <style jsx>{`
      .container {
        max-width: 850px;
        width: 100%;
        margin: 0 auto;
        font-family: 'PT Serif', serif;
      }
    `}</style>
    </div>
  </div>
);


export default Hakkimda;
