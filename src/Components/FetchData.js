import React, { useState, useEffect } from "react";
import SetData from "./SetData";

function FetchData() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://swapi.py4e.com/api/people/"
  );

  useEffect(() => {
    CollectData();
  }, [currentPageUrl]);

  const CollectData = async (searchTerm) => {
    const endpoint = searchTerm
      ? `https://swapi.py4e.com/api/people/?search=${searchTerm}`
      : currentPageUrl;

    const response = await fetch(endpoint);

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
    setNextPageUrl(data.next);
    setPrevPageUrl(data.previous);
  };

  const fetchNextPage = () => {
    if (nextPageUrl) {
      setCurrentPageUrl(nextPageUrl);
    }
  };

  const fetchPrevPage = () => {
    if (prevPageUrl) {
      setCurrentPageUrl(prevPageUrl);
    }
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
        onSearchClick={CollectData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        fetchNextPage={fetchNextPage}
        fetchPrevPage={fetchPrevPage}
      />
    </div>
  );
}

export default FetchData;
