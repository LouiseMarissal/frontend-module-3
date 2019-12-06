import axios from "axios";

// const AddCoktail = props => {
//   const [formValues, setFormValues] = useState({});
//   const [fields, setFields] = useState({});
//   console.log(props);

//   const addIngredientInput = e => {
//     console.log("Clicked");
//     e.preventDefault();
//   };
//   const addMeasureInput = e => {
//     console.log("Clicked again");
//     e.preventDefault();
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(formValues);
//     const formData = new FormData();
//     for (let key in formValues) formData.append(key, formValues[key]);
//     axios
//       .post(process.env.REACT_APP_BACKEND_URL + "/cocktail", formData)
//       .then(res => {
//         console.log(res);
//         // props.history.push("/cocktails");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     // console.log("ajouté");
//   };

//   const handleChangeForm = e => {
//     e.preventDefault();
//     if (e.target.type === "checkbox") {
//       setFormValues({ ...formValues, [e.target.name]: e.target.checked });
//     } else setFormValues({ ...formValues, [e.target.name]: e.target.value });

//     console.log("im changing");
//   };

//   return (
//     <div className="add-cocktail-form">
//       <h1>Create your own Cocktail</h1>
//       <form className="form" onSubmit={handleSubmit} onChange={handleChangeForm}>
//         <input type="text" name="Name" className="input" placeholder="Name" />
//         <input type="text" name="Glass" className="input" placeholder="Glass" />
//         <input
//           type="text"
//           name="Instructions"
//           className="input"
//           placeholder="Recipe"
//         />
//         <div className="is-alcoholic">
//           <label htmlFor="Alcoholic">Contains Alcohol ?</label>
//           <input
//             type="checkbox"
//             name="Alcoholic"
//             id="Alcoholic"
//             className="input"
//           />
//         </div>
//         <div className="measure-ingredient-container">
//           <div className="ingredient-container">
//             <input
//               type="text"
//               name="Ingredients"
//               className="input"
//               placeholder="Add Ingredient"
//             />
//             <i className="fas fa-plus" onClick={addIngredientInput} />
//           </div>

//           <div className="measure-container">
//             <input
//               type="text"
//               name="Measures"
//               className="input"
//               placeholder="Measure"
//             />
//             <i className="fas fa-plus" onClick={addMeasureInput}></i>
//           </div>
//         </div>
//         <input type="file" name="Image" className="input" />

//         <button>Add!</button>
//       </form>
//     </div>
//   );
// };

// export default AddCoktail;

import React, { useState } from "react";

const AddCocktail = props => {
  const [formValues, setFormValues] = useState({});
  const [fields, setFields] = useState([{ value: null }]);
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(formValues);
    const formData = new FormData();
    for (let key in formValues) formData.append(key, formValues[key]);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/cocktail", formData)
      .then(res => {
        console.log(res);
        // props.history.push("/cocktails");
      })
      .catch(err => {
        console.log(err);
      });
    // console.log("ajouté");
  };
  const handleChangeForm = e => {
    e.preventDefault();
    if (e.target.type === "checkbox") {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    } else setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

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
    <div className="add-cocktail-form">
      <h1>Add your own cocktail</h1>
      <form
        className="form"
        onSubmit={handleSubmit}
        onChange={handleChangeForm}
      >
        <input type="text" name="Name" className="input" placeholder="Name" />
        <input type="text" name="Glass" className="input" placeholder="Glass" />
        <input
          type="text"
          name="Instructions"
          className="input"
          placeholder="Recipe"
        />
        <div className="is-alcoholic">
          <label htmlFor="Alcoholic">Contains Alcohol ?</label>
          <input
            type="checkbox"
            name="Alcoholic"
            id="Alcoholic"
            className="input"
          />
        </div>
        <div className="add-inputs-container">
          <div className="add-ingredients">
            <h3>Add Ingredients</h3>
            <i className="fas fa-plus" onClick={() => handleAdd()}></i>
            {fields.map((field, i) => (
              <div key={`${field}-${i}`}>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter text"
                  value={field.value || ""}
                  onChange={e => handleChange(i, e)}
                  name="Ingredients"
                />
                <i onClick={() => handleRemove(i)} className="fas fa-minus"></i>
              </div>
            ))}
          </div>
          <div className="add-measures">
            <h3>Add Measures</h3>
            <i className="fas fa-plus" onClick={() => handleAdd()}></i>
            {fields.map((field, i) => (
              <div key={`${field}-${i}`}>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter text"
                  value={field.value || ""}
                  onChange={e => handleChange(i, e)}
                  name="Measures"
                />
                <i onClick={() => handleRemove(i)} className="fas fa-minus"></i>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCocktail;
