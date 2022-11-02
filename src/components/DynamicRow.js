import React from "react";
import { useState } from "react";
import AddDeleteRow from "./AddDeleteRow";
function DynamicRow() {

  // initial state
  const [rowsData, setRowsData] = useState([]);
  const [result, setResult] = useState();
  const [disabled, setDisabled] = useState(false)



// calculation
  const calculation = (array) => {
    let sum;
    array.reduce((accumulator, obj) => {
      if (obj.calculation == "true") {
        sum = accumulator + Number(obj.numValue);
        setResult(sum);
      } 
      return sum;
    }, 0);
    
  };

  // Add Row
  const addRows = () => {
    const rowsInput = {
      numValue: "",
      calculation: "true",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const disableRow = (index, evnt) =>{
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    console.log(rowsInput, "ererer");

    console.log("index",index)
    setDisabled(true)
  }

  // handle Change
  const handleChange = (index, evnt) => {
    evnt.preventDefault();
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    console.log(rowsInput, "rowsInput");

    // Call calculation method
    calculation(rowsInput);

    setRowsData(rowsInput);
  };

  // Delete Rows
  const deleteRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    // Call calculation method
    calculation(rows)
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
