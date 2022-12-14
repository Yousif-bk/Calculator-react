import React from "react";
import { useState } from "react";
import AddDeleteRow from "./AddDeleteRow";
function DynamicRow() {
  // initial state
  const initialState =  { numValue: "", calculation: "true", disabled: false }
  const [rowsData, setRowsData] = useState([initialState]);
  const [result, setResult] = useState(0);

  // calculation inputs
  const calculation = (rowsInput) => {
    let sum;
    rowsInput.reduce((accumulator, obj) => {
      if (accumulator == undefined && obj.calculation == "false") {
        setResult(result - Number(rowsInput[0].numValue));
      } else if (accumulator !== undefined && obj.calculation == "true") {
        sum = accumulator + Number(obj.numValue);
        setResult(sum);
      }
      return sum;
    }, 0);
  };

  // Add New Row
  const addRows = () => {
    const rowsInput = {
      numValue: "",
      calculation: "true",
      disabled: false,
    };
    setRowsData([...rowsData, rowsInput]);
  };

  // handle Input Value Change
  const handleChange = (index, evnt) => {
    evnt.preventDefault();
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;

    // Call calculation method
    calculation(rowsInput);
    setRowsData(rowsInput);
  };

  // Delete Row
  const deleteRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    // Call calculation method
    calculation(rows);
  };

  return (
    <div className="container mt-5">
      <h1>Calculator</h1>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={addRows}>
          Add Row
        </button>
        <div className="mt-3 mr-4">
          <AddDeleteRow
            rowsData={rowsData}
            deleteRows={deleteRows}
            handleChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <span>Result: {result}</span>
        </div>
      </div>
    </div>
  );
}

export default DynamicRow;
