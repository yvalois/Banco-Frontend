import { Link } from "react-router-dom";
import React, {  useState, useEffect } from "react";

import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Table, textarea, Button } from "react-bootstrap";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch
} from "react-icons/ai";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import FormPr from "../components/FormularioPrestamo/FormularioPrestamo";


function Solicitudes() { 

  let [token] = useState('');

  let [ingresos,setIngresos]=useState();

  useEffect(() => {

    const token_storage = window.localStorage.getItem("token-jwt");
    if (token_storage) {
      token = token_storage;
    } else {
      window.location.href="/";
    }
  }); 
  const Solicitud = (e) => {


    var h1="",h2="",h3="",h5="",h6="",h7="",h8=""
    var Error=0
  e.preventDefault();

  const solicitud = {
    codigo: "CB"+Math.random(),
    id_user:e.target.id_user.value,
    valor: e.target.valor.value,
    cuotas: e.target.cuotas.value,
    comentarios: e.target.message.value,
    prorroga: false,
    razon_prorroga: "",
    cuotas_prorroga: 0,
    estado_prorroga: 0,
    cuotas_pagadas: 0,
    cuotas_pendientes: 0,
    cuota_capital: 0,
    interes: 0,
    estado_solicitud: 0,

  };





  const registrarSolicitud = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/crear_solicitud`, {
      method: "POST",
      body: JSON.stringify(solicitud),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
        alert(`Su solicitud esta siendo procesada con el código ${solicitud.codigo}. Por favor guarde este número para futuras consultas.`);
        window.location.href = "/solicitudes";
      })
      .catch((error) => console.error("Error:", error))
  };

  
  //validacion solicitado completo
  //+
  //Solo letras
  const id=/^[0-9\b]+$/g.test(solicitud.valor);
  if( !id){
    Error=1
    h1="Valor: Solo se permiten numeros"
    
  }
  const id1=/^[0-9\b]+$/g.test(solicitud.cuotas);
  if( !id1){
    Error=1
    h2="Cuotas: solo se permiten numeros"
    
  }
  if(solicitud.valor < "100000"){
    Error=1
    h3="Valor: el valor debe ser minimo de cien mil pesos."
    
  }
  //validacion id
    //solo numeros
  const onlinum=/^[0-9\b]+$/g.test(solicitud.id_user);
  if(!onlinum){
    Error=1
    h5="Número de identificación: Solo se permiten números."
  }
  //max caracteres
  const caracteres=solicitud.id_user.length
  if(caracteres < 10 || caracteres>  10){
    Error=1
    h6="Número de identificación: Solo se permiten 10 caracteres."
  }
  const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
  if(usuario_storage.id!=solicitud.id_user){
    Error=1
    h7="Número de identificación: No coincide la identificación con el actual usuario del sistema."
  }

  if(ingresos<solicitud.valor && solicitud.cuotas>4){
    Error=1
    h8="por cada prestamo que alcance el 100% de los ingresos del usuario se deberan pagar como maximo en 4 cuotas"
  }

  if(Error == 0){ 
    registrarSolicitud();
    
  }else if (Error == 1 ){
      alert(`Corrija los siguientes errores para poder registrar su solicitud correcta:\n\n${h1}\n${h2}\n${h3}\n${h5}\n${h6}\n${h7}\n${h8}`);
  }

  
//window.location.assign("https://www.delftstack.com");


  }
  return  <body>
  <BarraSuperior />
  <main id="main">

    {/* <!-- ======= Breadcrumbs Section ======= -->*/}
<Breadcrumbs title={"Solicitudes"}/>

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="portfolio-details" class="portfolio-details">
      <div className="container">
        <form className="portfolio-info" data-aos="fade-up" onSubmit={Solicitud}>
          <div className="row ">
            <div className="col-lg-2">

            </div>
            <div className="col-sm-2">
              <p style={{fontWeight: "bold", textAlign: "left"}}>Nueva solicitud</p>
            </div>
          </div>
          <div className="row">

          <div className="row ">

            <div className="col-sm-5" style={{textAlign:"right"}}>
              <p style={{fontStyle: "italic"}}>Confirmar cedula usuario</p>
            </div>
            <div className="col-sm-5"style={{textAlign:"left"}}>
              <input type="number" name="id_user" className="form-control" id="ced" placeholder="Cédula" required />
                    
              <br/>
            </div>
          </div>
          <div className="row ">

            <div className="col-sm-5" style={{textAlign:"right"}}>
              <p style={{fontStyle: "italic"}}>Valor solicitado</p>
            </div>
            <div className="col-sm-5"style={{textAlign:"left"}}>
              <input type="text" name="valor" className="form-control" id="name" placeholder="Valor solicitado" required />
                    
              <br/>
            </div>
          </div>

          <div className="row ">

          <div className="col-sm-5" style={{textAlign:"right"}}>
            <p style={{fontStyle: "italic"}}>Tiempo en meses de cancelación</p>
          </div>
          <div className="col-sm-5"style={{textAlign:"left"}}>
            <input type="text" name="cuotas" className="form-control"  id="email" placeholder="Cuotas"  required />
                    
            <br/>
          </div>
          </div>

          <div className="row ">

            <div className="col-sm-5" style={{textAlign:"right"}}>
              <p style={{fontStyle: "italic"}}>Comentarios a agregar</p>
            </div>
            <div className="col-sm-5"style={{textAlign:"left"}}>
              <textarea className="form-control" name="message" rows="5" placeholder="Comentarios a agregar" ></textarea>
              <br/>
            </div>
          </div>
          <div className="text-center"><Button type="submit"variant="light" style={{boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)"}}>Enviar Solicitud</Button></div>  
          </div>
        </form>
      </div>
    </section>{/* <!-- End Contact Section --> */}
  </main>{/* <!-- End #main --> */}
  <BarraInferior />
</body>

}






export default Solicitudes;