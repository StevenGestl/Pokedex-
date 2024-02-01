import React, { Component } from "react";
import Card from "./Card.js";
import { pokemonTypeExport } from "./Card.js";
//pokemonTypeExport is a function from Card.js


function timeoutSearch() {
  console.log(pokemonTypeExport);
}
setTimeout(timeoutSearch, 4000); /* delays the search by 4 seconds */

//The following functions will return various background divs based on the pokemon type
function WaterBackground() {
  return <div className="card-c-water">Water</div>;
}

function FireBackground() {
  return <div className="card-c-fire">fire</div>;
}

function GrassBackground() {
  return <div className="card-c-grass">grass</div>;
}

function NormalBackground() {
  return <div className="card-c-normal">Normal</div>;
}

function IceBackground() {
  return <div className="card-c-ice">ice</div>;
}

function ElectricBackground() {
  return <div className="card-c-electric">elecric</div>;
}

function FightingBackground() {
  return <div className="card-c-fighting">fighting</div>;
}

function PoisonBackground() {
  return <div className="card-c-poison">poison</div>;
}

function GroundBackground() {
  return <div className="card-c-ground">ground</div>;
}

function FlyingBackground() {
  return <div className="card-c-flying">flying</div>;
}

function PsychicBackground() {
  return <div className="card-c-psychic">psychic</div>;
}

function BugBackground() {
  return <div className="card-c-bug"></div>;
}

function RockBackground() {
  return <div className="card-c-rock"></div>;
}

function GhostBackground() {
  return <div className="card-c-ghost"></div>;
}

function DarkBackground() {
  return <div className="card-c-dark"></div>;
}

function DragonBackground() {
  return <div className="card-c-dragon"></div>;
}

function SteelBackground() {
  return <div className="card-c-steel"></div>;
}

function FairyBackground() {
  return <div className="card-c-fairy"></div>;
}

function DefaultCard() {
  return <div className="card-c"></div>;
}

// Switch-case statement to determine which background is used depending on the pokemon type 

let type = "grass";
function Background() {
  switch (type) {
    case "water":
      return <WaterBackground />;
      break;
    case "fire":
      return <FireBackground />;
      break;
    case "grass":
      return <GrassBackground />;
      break;
    case "normal":
      return <NormalBackground />;
      break;
    case "ice":
      return <IceBackground />;
      break;
    case "electric":
      return <ElectricBackground />;
      break;
    case "fighting":
      return <FightingBackground />;
      break;
    case "poison":
      return <PoisonBackground />;
      break;
    case "ground":
      return <GroundBackground />;
      break;
    case "Flying":
      return <FlyingBackground />;
      break;
    case "Psychic":
      return <PsychicBackground />;
      break;
    case "Bug":
      return <BugBackground />;
      break;
    case "Rock":
      return <RockBackground />;
      break;
    case "ghost":
      return <GhostBackground />;
      break;
    case "dark":
      return <DarkBackground />;
      break;
    case "Dragon":
      return <DragonBackground />;
      break;
    case "steel":
      return <SteelBackground />;
      break;
    case "fairy":
      return <FairyBackground />;
    default:
      return <DefaultCard />;
  }
}

//simple test of a function to display content, called as background in App.js
Background = () => {
  return (
    <div>Background Div Test</div>
  )
};  

//Previously used content, saved for reference

/*function Background(props) {
  const { type } = props;
  switch (type) {
    case "water":
      return <p>water</p>;
break;
    case "fire":
      return <p>Fire</p>;
break;
    case "grass":
      return <p>Grass</p>;
  }
} */

/*
class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Steven</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}

    /*
        let a = 3;
        if (a>2) {console.log(">2")}
        else if (a<2) {console.log("<2")};
  

        /* MY COPY OF THE ABOVE CODE INCASE OF MISTAKE BEYOND REPAIR

        let backgroundColor = () => {
          var element = document.getElementById("card-c");
        };

        let a = pokemonType;
        if (a == "water") {
          console.log("hello from water");
        } else if (a == "fire") {
           console.log("hello from fire");
        } else if (a == "normal") {
          console.log("normal boy");
        } else if (a == "grass") {
          console.log("Grass babbyyy");
        } else if (a == "electric") {
           console.log("hello from electric");
        } else if (a == "ice") {
          console.log("ice boy");
        } else if (a == "fighting") {
          console.log("Hands babbyyy");
        } else if (a == "poison") {
           console.log("venom spit");
        } else if (a == "ground") {
          console.log("ground pound");
        } else if (a == "flying") {
          console.log("wings");
        } else if (a == "psychic") {
           console.log("mind games");
        } else if (a == "bug") {
          console.log("bug boy");
        } else if (a == "rock") {
          console.log("hard daddy");
        } else if (a == "ghost") {
           console.log("spooky");
        } else if (a == "dark") {
          console.log("needs a flashlight");
        } else if (a == "dragon") {
          console.log("when did pokemon get dragons");
        } else if (a == "steel") {
          console.log("Pittsburgh pokemon");
        } else if (a == "fairy") {
          console.log("great fairy anyone?");
        } 

*/

export default Background;
