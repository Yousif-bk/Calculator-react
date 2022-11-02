import React, { useState } from "react";

function AddDeleteRow({ rowsData, deleteRows,  handleChange }) {
  const [disabled, setDisabled] = useState(false)

  const disableRow = (index, evnt)=> {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;


    setDisabled(true)
  }

  return rowsData.map((data, index) => {
    const { numValue,calculation } = data;
    return (
      <ul key={index}>
        <li className="d-flex mb-3">
          <select value={calculation} name="calculation" onChange={(evnt) => handleChange(index, evnt)}>
            <option value={true}>+</option>
            <option value={false}>-</option>
          </select>
          <input
            type="text"
            className="form-control w-25 mx-2"
            name="numValue"
            value={numValue}
            onChange={(evnt) => handleChange(index, evnt)}
          />
          <button
            className="btn btn-danger mx-2"
            onClick={() => deleteRows(index)}>
            Delete
          </button>

          <button
            className="btn btn-light mx-2"
            onClick={(evnt) => disableRow(index, evnt)}>
            Disable
          </button>
        </li>
      </ul>
    );
  });
}

export default AddDeleteRow;
