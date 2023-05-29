import React, { useState, useEffect } from "react";
import SetData from "./SetData";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    collectData();
  }, []);

  async function collectData() {
    const characterPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const speciesPages = [1, 2, 3, 4];
    const planetPages = [1, 2, 3, 4, 5, 6];

    const characterData = (
      await Promise.all(
        characterPages.map((page) => {
          return axios.get(`https://swapi.py4e.com/api/people/?page=${page}`);
        })
      )
    ).flatMap((characters) => characters.data.results);

    let tempPlanets = (
      await Promise.all(
        planetPages.map((page) => {
          return axios.get(`https://swapi.py4e.com/api/planets/?page=${page}`);
        })
      )
    ).flatMap((planets) => planets.data.results);

    let tempSpecies = (
      await Promise.all(
        speciesPages.map((page) => {
          return axios.get(`https://swapi.py4e.com/api/species/?page=${page}`);
        })
      )
    ).flatMap((species) => species.data.results);

    tempPlanets = arrayToDict(tempPlanets);
    tempSpecies = arrayToDict(tempSpecies);

    for (const char of characterData) {
      char.homeworld = tempPlanets[char.homeworld];
      char.species =
        char.species.length === 0 ? "Human" : tempSpecies[char.species[0]];
    }

    setData(characterData);
  }

  function arrayToDict(array) {
    let obj = {};
    for (let item of array) {
      obj[item["url"]] = item["name"];
    }
    return obj;
  }

  return (
    <div>
      <SetData
        placeDatas={data}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default FetchData;
