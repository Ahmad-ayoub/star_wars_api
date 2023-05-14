import React, { useState } from "react";

function SetData(props) {
  const [inputValue, setInputValue] = useState("");

  function returnFormatedData() {
    const dataAsTable = props.placeDatas.map((placeData, index) => {
      const { name, birth_year, height, mass, homeworld, species } = placeData;
      return (
        <div key={index}>
          <div className="d-flex align-items-center justify-content-center pt-5 w-100">
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
                <tr>
                  <td>{name}</td>
                  <td>{birth_year}</td>
                  <td>{height}</td>
                  <td>{mass}</td>
                  <td>{homeworld}</td>
                  <td>{species}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-75">
              <tbody></tbody>
            </table>
          </div>
        </div>
      );
    });
    return dataAsTable;
  }
  return (
    <div>
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
            onClick={() => props.onSearchClick(inputValue)}
          >
            Search
          </button>
        </div>
        {returnFormatedData()}
      </div>
    </div>
  );
}
export default SetData;
