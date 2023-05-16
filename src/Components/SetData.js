import React, { useState } from "react";
import CategoryTitles from "./CategoryTitles";

function SetData(props) {
  const [inputValue, setInputValue] = useState("");

  function returnFormatedData() {
    const dataRows = props.placeDatas.map((placeData, index) => {
      const { name, birth_year, height, mass, homeworld, species } = placeData;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{homeworld}</td>
          <td>{species}</td>
        </tr>
      );
    });
    return dataRows;
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
              {returnFormatedData()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default SetData;
