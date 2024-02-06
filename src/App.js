import React, { useEffect, useState } from "react"; //import React is required on every file, useEffect and useState are also called 
import axios from "axios"; //not currently used
import "./App.css";
import Card from "./components/Card";
import Background from "./components/Background";
import WaterBackground from "./components/Card"
import Howdy from "./components/switch";
//Imports call in needed exports from other files

//App runs the entire program, in the div components are placed suchs as < Card /> or < Background />
const App = () => {
  return (
    <div>
    < Card />
    </div>
  ); }



export default App; //export default "name" is required on every file
