import React, { useState } from "react";

function AddDeleteRow({ rowsData, deleteRows, handleChange }) {
  // const [disabled, setDisabled] = useState(false)

  // Disable Specific Row
  const disableRow = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    console.log(rowsInput);
    rowsInput[index].disabled = true;
    //  setDisabled(true)
  };

  return rowsData.map((data, index) => {
    const { numValue, calculation, disabled } = data;
    return (
      <ul key={index}>
        <li className="d-flex mb-3">

          <select
            disabled={disabled}
            value={calculation}
            name="calculation"
            onChange={(evnt) => handleChange(index, evnt)}>
            <option value={true}>+</option>
            <option value={false}>-</option>
          </select>

          <input
            disabled={disabled}
            type="text"
            className="form-control w-25 mx-2"
            name="numValue"
            value={numValue}
            onChange={(evnt) => handleChange(index, evnt)}/>

          {/* Delete btn */}
          <button
            disabled={disabled}
            className="btn btn-danger mx-2"
            onClick={() => deleteRows(index)}>
            Delete
          </button>

          {/*  Disable Btn */}
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
