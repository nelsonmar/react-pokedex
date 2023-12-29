import React, { useState } from "react";
import axios from "axios";
import DexResult from "./DexResult";

function DexForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);
  const [data, setData] = useState(null);
  const [emptyResult, setEmptyResult] = useState(false);

  const showForm = () => {
    return (
      <div>
        <i className="HomeText">Elegí el Pokemon a consultar.</i>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <br/>
          <div>
            <label htmlFor="number">Número</label>
            <input type="number" name="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <br/>
          <button type="submit" disabled={name === ""}>Buscar!</button>
        </form>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('check ', name);
    if (name === "") {
      console.error('BUSQUEDA VACIA');
    }
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      // console.log(response.data);
      setData(response.data);
      if (response.data.length === 0)
        setEmptyResult(true);
      else
        setEmptyResult(false);
    } catch (error) {
      console.error(error);
      setEmptyResult(false);
    }
  };
  
  return (
    <div>    
      {data && (
          <DexResult result={data}/>
      )}
      {! data && (
        showForm()
      )}
      {emptyResult && (
        <div>
          <div class="alert alert-warning fade show" role="alert">                
            La búsqueda no arrojó resultados.       
          </div>
          <br/>
          {showForm()}
        </div>
      )}
    </div>
  )

}

export default DexForm;