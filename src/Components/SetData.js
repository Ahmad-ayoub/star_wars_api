import React, { useState } from "react";

function SetData(props) {
  const [inputValue, setInputValue] = useState("");

  function returnFormatedData() {
    const { placeDatas } = props;
    const dataAsTable = placeDatas.map((placeData, index) => {
      const { Name, Birthdate, Height, Mass, Homeworld, Species } = placeData;
      return (
        <div key={index}>
          <div className="d-flex justify-content-center pt-5 w-100">
            <table border="1" className="table">
              <tbody>
                <tr>
                  <td className="col-3">Name</td>
                  <td className="col-3">Birthdate</td>
                  <td className="col-3">Height</td>
                  <td className="col-3">Mass</td>
                  <td className="col-3">Homeworld</td>
                  <td className="col-3">Species</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-75">
            <tbody>
              <tr>
                <td>{Name}</td>
                <td>{Birthdate}</td>
                <td>{Height}</td>
                <td>{Mass}</td>
                <td>{Homeworld}</td>
                <td>{Species}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
    return dataAsTable;
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          placeholder="May the Force be With You"
          className="w-75"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSearchClick}
        >
          Search
        </button>
        {returnFormatedData()}
      </div>
    </div>
  );
}

export default SetData;
