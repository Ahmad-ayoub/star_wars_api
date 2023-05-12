import React, { useState } from "react";
import SetData from "./SetData";

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
