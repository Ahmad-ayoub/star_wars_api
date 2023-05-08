import React, { useState, useEffect } from "react";
import SetData from "./SetData";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    collectData();
  }, []);

  const collectData = async () => {
    const response = await fetch("https://swapi.dev/api/");
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      <SetData data={data} placeDatas={collectData} />
    </div>
  );
}

export default FetchData;
