import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Argentina");
//   const [age, setAge] = useState(18);
  const [number, setNumber] = useState(1);

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <label htmlFor="country">País</label>
        <select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
        </select>
      </div>
      <div>
        <label htmlFor="number">Edad</label>
        <input type="number" name="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <input type="range" name="number" id="number-spinner" min="1" max="151" value={number} onChange={(e) => setNumber(e.target.value)}/>
      </div>
      <button type="submit">Buscar!</button>
    </form>
  );
}

export default Form;