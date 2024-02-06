import React, { useEffect, useState } from "react"; 
import axios from "axios"; //not being used
import "./Card.css";



export const Card = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  /* const [backgroundColor, setbackgroundColor] = useState("") */

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      /*console.log(res); this appears to just console log res, doesn't seem to be needed BUT CHECK*/
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };


//Below is the return function for the input field
//handleSubmit takes the string that a user puts in and runs getPokemon
//handleChange takes the string from user and converts it to lowercase
  return (
    <div className="container-large">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name i.e. Pikachu "
          ></input>
        </label>
      </form>




      {pokemonData.map((data) => {
        const word = data.name.toString();

        const capitalized = word.charAt(0).toUpperCase() + word.slice(1); //uses slice and toUpperCase to create uppercase string for capitalized

        const type = pokemonType.toString(); //converts pokemonType to a string named type

        const capitalType = type.charAt(0).toUpperCase() + type.slice(1); //uses slice and toUpperCase to create uppercase string for capitalType

        const moveOne = data.abilities[0].ability.name.toString(); //converts data.abilities to a string named moveOne

        const capitalMoveOne =
          moveOne.charAt(0).toUpperCase() + moveOne.slice(1); //uses slice and toUpperCase to create uppercase string for moveOne

        const moveTwo = data.abilities[1].ability.name.toString(); //converts data.abilities to a string named moveTwo

        const capitalMoveTwo =
          moveTwo.charAt(0).toUpperCase() + moveTwo.slice(1); // uses slice and toUpperCase to create uppercase string for moveTwo


     var pokemonTypeExport = pokemonType;

     /* PokemonTypeExport isn't exporting regardless of what it is exporting. FIX THE EXPORT */

     console.log(pokemonTypeExport)

        return ( /* begins return function of main card */
          <div className="background-c"> 
            <div className="card-c">
              <div className="top">
                <div className="name">{capitalized}</div>{/*uses capitalized const to display pokemon name */} 
                <div className="health">HP 50</div>
              </div>
              <div className="img-border"></div>
              <img
                src={data.sprites["front_default"]} /* pulls a pokemon sprite from the pokeAPI based on name */
                alt="pokemon"
                className="poke-img"
              />
              
                <div className="details-head">
                <div className=" height">
                  {" "}
                  Height: {Math.round(data.height * 3.9)} In. {/* converts cm to in using math.round */}
                </div>
                <div className="weight">
                  Weight: {Math.round(data.weight / 4.3)} Lbs. {/* converts weight from metric to english using math.round */}
                </div>
                
              </div>
              {/*lower portion of card */}
              <div className="details-section">
                <div className="details">
                  Moves:
                  <div className="details-right">
                    {capitalMoveOne} <br></br>
                    {capitalMoveTwo} {/* displays two moves that have been converted to a capital string in above logic */}
                  </div>
                  <hr></hr>
                </div>
                <div className="details">
                  Pokemon Id:
                  <div className="details-right">{data.id}</div> {/* displays id from array */}
                  <hr></hr>
                </div>

                <div className="details">
                  Number of Battles:
                  <div className="details-right">
                    {data.game_indices.length}
                  </div>
                  <hr></hr>
                </div>
                <div className="details">
                  Type:
                  <div className="details-right">{capitalType}</div> {/* displays pokemon type that's been converted from an array to a capitalized string */}
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export var pokemonTypeExport; //exports pokemonTypeExport, returns undefined in other files, needs to be set to a class or component??
export default Card; //export default "name" is required on every file


