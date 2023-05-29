import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function SetData(props) {
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const charactersPerPage = 10;
  const charactersViewed = pageNumber * charactersPerPage;
  const pageCount = props.placeDatas.length / charactersPerPage;

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  function returnFormatedData() {
    const dataRows = props.placeDatas
      .slice(charactersViewed, charactersViewed + charactersPerPage)
      .map((placeData, index) => {
        const { name, birth_year, height, mass, homeworld, species } =
          placeData;
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
        <div>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginate-container"}
          />
        </div>
      </div>
    </div>
  );
}
export default SetData;
