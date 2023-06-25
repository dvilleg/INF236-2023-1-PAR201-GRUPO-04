import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   rut: "",
   edad: "",
   direccion: "",
   fecha: "",
   acompanante: "",
   level: "",
   diagnostico: "",
   motivo: "",
   ex: "",
   trata: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      rut: form.rut,
      edad: form.edad,
      direccion: form.direccion,
      fecha: form.fecha,
      acompanante: form.acompanante,
      level: form.level,
      diagnostico: form.diagnostico,
      motivo: form.motivo,
      ex: form.ex,
      trata: form.trata
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Datos Ficha</h3>
     <form onSubmit={onSubmit}>
       <div className="container">
         <label htmlFor="name">Nombre: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="position">Apellido: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="rut">Rut: </label>
         <input
           type="text"
           className="form-control"
           id="rut"
           value={form.rut}
           onChange={(e) => updateForm({ rut: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="edad">Edad: </label>
         <input
           type="text"
           className="form-control"
           id="edad"
           value={form.edad}
           onChange={(e) => updateForm({ edad: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="direccion">Dirección: </label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.direccion}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="fecha">Fecha: </label>
         <input
           type="text"
           className="form-control"
           id="fecha"
           value={form.fecha}
           onChange={(e) => updateForm({ fecha: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="acompanante">Acompañante: </label>
         <input
           type="text"
           className="form-control"
           id="acompanante"
           value={form.acompanante}
           onChange={(e) => updateForm({ acompanante: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="motivo">Motivo Consulta: </label>
         <input
           type="text"
           className="form-control"
           id="motivo"
           value={form.motivo}
           onChange={(e) => updateForm({ motivo: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="diagnostico">Diagnostico: </label>
         <input
           type="text"
           className="form-control"
           id="diagnostico"
           value={form.diagnostico}
           onChange={(e) => updateForm({ diagnostico: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="ex">Examen Solicitado: </label>
         <input
           type="text"
           className="form-control"
           id="ex"
           value={form.ex}
           onChange={(e) => updateForm({ ex: e.target.value })}
         />
       </div>
       <div className="container">
         <label htmlFor="trata">Tratamiento e Indicaciones: </label>
         <input
           type="text"
           className="form-control"
           id="trata"
           value={form.trata}
           onChange={(e) => updateForm({ trata: e.target.value })}
         />
       </div>
       <div className="container">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionFONASA"
             value="FONASA"
             checked={form.level === "FONASA"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">FONASA</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionISAPRE"
             value="ISAPRE"
             checked={form.level === "ISAPRE"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">ISAPRE</label>
         </div>
       </div>
       <br />
       <div className="container">
         <input
           type="submit"
           value="Actualizar Datos"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
