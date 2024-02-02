import React from "react";

const Howdy = () => {
  return console.log("hello from switch.js");
};

const Background = () => {

let type = "water";
function Background() {
  switch (type) {
    case "water":
      return <WaterBackground />;
      break;
    case "fire":
      return <FireBackground />;
      break;
  }
}


function WaterBackground() {
  return <div className="card-c-water">Water</div>;
}

function FireBackground() {
  return <div className="card-c-fire">fire</div>;
}}

export default Howdy;
export Background;
