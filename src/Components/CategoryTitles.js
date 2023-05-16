import React from "react";
import FetchData from "./FetchData";

function CategoryTitles(props) {
  if (!props.onSearchClick === 0) {
    return (
      <tr>
        <td className="col-3">Name</td>
        <td className="col-3">Birthdate</td>
        <td className="col-3">Height</td>
        <td className="col-3">Mass</td>
        <td className="col-3">Homeworld</td>
        <td className="col-3">Species</td>
      </tr>
    );
  }
}

export default CategoryTitles;
