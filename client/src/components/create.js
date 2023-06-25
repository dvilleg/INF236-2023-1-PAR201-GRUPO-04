import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
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
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", rut: "", edad: "", direccion: "", fecha: "", acompanante: "", level: "", diagnostico: "", motivo: "", ex: "", trata: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Crear Nueva Ficha</h3>
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
       <div className="container">
         <input
           type="submit"
           value="Crear Ficha"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
