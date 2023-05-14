import React, { useState } from "react";
import SetData from "./SetData";

function listTenCharacters() {
  const collectCharacters = async () => {
    const characterloop = [];
    for (let i; i <= 10; i++) {
      characterloop.push(i);
    }
    const charactersList = await fetch(
      `https://swapi.dev/api/people/?search=${characterloop}`
    );
    if (!charactersList.ok) {
      console.error("API request failed", charactersList);
      return;
    }
  };
}

function FetchData() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const collectData = async (searchTerm) => {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchTerm}`
    );
    if (!response.ok) {
      console.error("API request failed", response);
      return;
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      console.error("No data found", data);
      return;
    }

    const updatedData = await Promise.all(
      data.results.map(async (character) => {
        const speciesNames = await fetchSpeciesNames(character.species);
        character.species = speciesNames;
        return character;
      })
    );
    setData(updatedData);
  };

  async function fetchSpeciesNames(speciesUrls) {
    const speciesPromises = speciesUrls.map((url) =>
      fetch(url).then((response) => response.json())
    );
    const speciesObjects = await Promise.all(speciesPromises);
    const speciesName = speciesObjects.map((species) => species.name);
    return speciesName.join(", ");
  }
  return (
    <div>
      <SetData
        placeDatas={data}
        onSearchClick={collectData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default FetchData;
