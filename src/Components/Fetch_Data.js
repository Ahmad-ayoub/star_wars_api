import React, { useState, useEffect } from "react";

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
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          placeholder="May the Force be With You"
          className="w-75"
        ></input>
      </div>

      <div>
        <table className="w-75">
          <tr></tr>
        </table>
      </div>
    </div>
  );
}

export default FetchData;
