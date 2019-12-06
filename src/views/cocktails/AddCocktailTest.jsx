import React, { useState } from "react";

const AddCocktailTest = () => {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className="App">
      <h1>Add your own cocktail</h1>
      <form action="">
        {fields.map((field, i) => (
          <div key={`${field}-${i}`}>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(i, e)}
            />
            <i
              type="button"
              onClick={() => handleRemove(i)}
              className="fas fa-minus"
            ></i>
          </div>
        ))}
      </form>

      <i onClick={() => handleAdd()} />
    </div>
  );
};

export default AddCocktailTest;
