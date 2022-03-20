import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Table, textarea, Button, Pagination } from "react-bootstrap";
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


function Pagos() {

  let [token, setToken] = useState('');
  let [sw, setSw] = useState(true);
  useEffect(() => {

    const token_storage = window.localStorage.getItem("token-jwt");
    if (token_storage) {
      token = token_storage;
    } else {
      window.location.href="/";
    }
  });
  var d = new Date();
  const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
  const [Estado, setEstado] = useState("hidden")
  const [Fondo, setFondo] = useState("assets_general/img/container.png")
  const [Valor, setValor] = useState([])
  const [Tiempo, setTiempo] = useState([])
  const [Cuotas_pen, setCuotas_pen] = useState()
  const [Codigo, setCodigo] = useState()
  const [Estado_sol, setEstado_sol] = useState()
  const [Id_user, setId_user] = useState(usuario_storage.id)
  const [Cuotas_pagadas, setCuotas_pagadas] = useState()
  const [Prorr, setProrr] = useState()
  const [Cuotas_prorroga, setCuotas_prorroga] = useState()
  const [Cuota_capital, setCuota_capital] = useState()
  const [Cuota_total, setCuota_total] = useState()
  const [Interes, setInteres] = useState()
  const [Estado_prorr, setEstado_prorr] = useState()
  const [Fecha_actual,setFecha_actual]= useState(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate())

  

  const establecerCodigo= () => {
    var codigo=document.getElementById("id_solicitud").value
    setCodigo(codigo)
  };
  var h1=0
  const consultarSolicitud = () => {
    h1=document.getElementById("id_solicitud").value
    fetch(`${process.env.REACT_APP_URL_BACKEND}/get_solicitud/${h1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
          if(response.mensaje==undefined){
            const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"))
            if(usuario_storage.id!=response.id_user){
              alert("Restringido: La referencia que busca no esta asociada a su número de identificación.")
            }else{
              establecerCodigo();
              setValor(response.valor);
              setTiempo(response.cuotas);
              setCuotas_pen(response.cuotas_pendientes);
              if(response.estado_solicitud==0){
                setEstado_sol("En estudio");
              }else if(response.estado_solicitud==1){
                setEstado_sol("Rechazado");
              }else if(response.estado_solicitud==2){
                setEstado_sol("Aprobado");
              }
              setCuotas_pagadas(response.cuotas_pagadas);
              if(response.prorroga==true){
                setProrr(response.cuotas_prorroga);
                if(response.estado_prorroga==0){
                  setEstado_prorr("En estudio");
                }else if(response.estado_prorroga==1){
                  setEstado_prorr("Rechazado");
                }else if(response.estado_prorroga==2){
                  setEstado_prorr("Aprobado");
                }
              }else{
                setProrr("No aplica");
                setEstado_prorr("No aplica");
              }
              setCuota_capital(response.cuota_capital);
              setInteres(response.interes);
              setCuota_total(response.cuota_capital+response.interes);
            }
          }else{
            alert(response.mensaje)
            setValor(" ");
            setTiempo(" ");
            setCodigo(" ")
            setCuotas_pen(" ");
            setEstado_sol("");
            setCuotas_pagadas(" ");
            setProrr(" ");
            setEstado_prorr(" ");
            setCuota_capital(" ");
            setInteres(" ");
            setCuota_total(" ");
          }
          })
        
      .catch((error) => console.error("Error:", error))
  };


  const Pago = (e) => {
    if(Codigo==undefined || Codigo==0){
      alert("Debe buscar el credito sobre el que desea hacer su pago.")
      window.location.href="/pagos"}
    
    var h1="",h2="", h3=""
    var Error=0
    
  e.preventDefault();

  const pago = {
    codigo_pago: "PG"+Math.random(),
    codigo_credito:Codigo,
    id_user:usuario_storage.id,
    valor: Valor,
    cuotas_pendientes: Cuotas_pen,
    valor_cuota: Cuota_total,
    cuota_pagada:document.getElementById("cuota_pagar").value,
    fecha:Fecha_actual

  };
 
  const cuota_actualizar = {
    cuotas_pendientes: (parseInt(pago.cuotas_pendientes)-1),
    cuotas_pagadas:(parseInt(Cuotas_pagadas)+1),
    valor: (parseInt(pago.valor)-parseInt(document.getElementById("cuota_pagar").value))
  };

  const actualizarSolicitudCuota = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_cuota/${Codigo}`, {
      method: "PUT",
      body: JSON.stringify(cuota_actualizar),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
      })
      .catch((error) => console.error("Error:", error));
  };

  const registrarPago = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/crear_pago`, {
      method: "POST",
      body: JSON.stringify(pago),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
        actualizarSolicitudCuota();
        alert(`Su pago fue registrado con el código ${pago.codigo_pago}.`);
        window.location.href = "/pagos";
      })
      .catch((error) => console.error("Error:", error))
  };

  

  if(pago.cuota_pagada==undefined || pago.cuota_pagada==null|| pago.cuota_pagada==""){
    Error=1
    h1="Pago: No se permiten campos vacios."
    }else if(pago.cuota_pagada<pago.valor_cuota){
      Error=1
      h2="Pago: El valor ingresado es menor a la cuota establecida. Si ha hecho un acuerdo de pago, ponganse en contacto con un asesor para atender su caso."
    }
  const id=/^[0-9\b]+$/g.test(pago.valor);
  if( !id){
    Error=1
    h3="Pago: Solo se permiten numeros"
    
  }
  if(Error == 0){
    registrarPago();
    
  }else if (Error == 1 ){
      alert(`Corrija los siguientes errores para poder registrar su pago correcta:\n\n${h1}\n\n${h2}\n\n${h3}`);
  }
  
}

  return (
    <body>
      <BarraSuperior />
      <main id="main">

        {/* <!-- ======= Breadcrumbs Section ======= -->*/}

            <Breadcrumbs title={"Pagos"}/>


        {/* <!-- ======= Contact Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div className="container" data-aos="fade-up">

            <div className="subcontainer">
              <div className="portfolio-info">
                <form className="row">
                  <div className="col-sm-2" style={{ fontWeight: "bold", textAlign: "center" }}>
                    <p>Codigo crédito a pagar</p>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" name="id_solicitud" className="form-control" id="id_solicitud" placeholder="Buscar codigo" required />
                  </div>
                  <div className="col-sm-1" style={{ fontWeight: "bold", textAlign: "center" }}>
                    <h3><AiOutlineSearch onClick={consultarSolicitud}/></h3>
                  </div>
                </form>
              </div>
            </div>
            <br />
            <div className="portfolio-info">


              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Codigo credito</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name"  value={Codigo} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Monto deuda</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name"  value={Valor} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Cuotas pendientes</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name"  value={Cuotas_pen} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Valor establecido cuota (capital+intereses)</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name"  value={Cuota_total} readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Cuota a pagar</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="cuota_pagar" className="form-control" id="cuota_pagar"  required/>
                  <br /><br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Fecha</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="date" name="dateNow" className="form-control" id="name"  value={Fecha_actual} readOnly/>
                  <br /><br />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2">

                </div>

                <div className="col-lg-3">
                 
                </div>
                <div className="col-lg-3">
                  <div className="text-center" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)", backgroundColor:"white" }}><Button variant="light" onClick={Pago}>Registrar pago</Button></div>
                </div>
                
                <div className="col-lg-3">
                
                  <br /><br />
                </div>
                <br /><br />

              </div>
            </div>
          </div>

        </section>{/* <!-- End Contact Section --> */}
      </main>{/* <!-- End #main --> */}
      <BarraInferior />
    </body>
  )
}

export default Pagos;