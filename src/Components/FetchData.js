// FetchData component
import React, { useState } from "react";
import SetData from "./SetData";

function FetchData() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const collectData = async () => {
    if (inputValue.trim() === "") return; // Don't fetch if inputValue is empty
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${inputValue}`
    );
    const data = await response.json();
    setData(data.results);
  };

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
