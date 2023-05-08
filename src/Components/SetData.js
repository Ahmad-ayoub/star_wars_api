import React from "react";

function SetData(props) {
  function returnFormatedData() {
    const { placeDatas } = props;
    const dataAsTable = placeDatas.map((placeData, index) => {
      const { Name, Birthdate, Height, Mass, Homeworld, Species } = placeData;
      return (
        <div key={index}>
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
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.onSearchClick && props.onSearchClick(index)}
        >
          Search
        </button>
        {returnFormatedData()}
      </div>
    </div>
  );
}

export default SetData;
