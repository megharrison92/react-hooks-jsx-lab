import React from "react";
import { image } from "../data/data";

function About() {
  //how do you get the image
  return (
  <div id="about">About
    <h2>About Me</h2>
    <p>Any content of your choosing</p>
    <img src={image} alt="I made this"/>
  </div>
  )
}

export default About;
