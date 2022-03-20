import { Link } from "react-router-dom";
import React, { Component, useState, useEffect } from "react";
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Table, textarea, Button } from "react-bootstrap";
import Sc from "../components/Sc/Sc";
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
function SimulacionPago() {
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
    const Pagar = (e) => {
      var h1="",h2="",h3="",h4="",h5="",h6="",h7="", h8="", h9=""
    var Error=0
    e.preventDefault();
  
    const pago = {
      cuota: e.target.cuota.value,
      cuotas: e.target.cuotas.value
    };
  
    
    //validacion solicitado completo
    //+
    //Solo letras
    const onlinum=/^[0-9\b]+$/g.test(pago.cuota);
    if(!onlinum){
      Error=1
      h1="solo se permiten numeros"
    }
    if(pago.cuota < 100000){
      Error=1
      h2="el pago debe ser minimo de cien mil pesos"
    }
    //validacion id
    //solo numeros
    if(pago.cuotas > 6){
      Error=1
      h3="maximo 6 meses"

    }
    const onlinum1=/^[0-9\b]+$/g.test(pago.cuotas);
    if(!onlinum1){
      Error=1
      h4="solo se permiten numeros"
    }
  
    if(Error == 0){ 
      window.location.assign("http://localhost:3000/login")
      
    }else if (Error == 1){
        alert(`Corrija los siguientes errores para poder registrar su usuario de forma correcta:\n\n${h1}\n${h2}\n${h3}\n${h4}`);
    }
    
  //window.location.assign("https://www.delftstack.com");
  
  };

  return (<body>
    <BarraSuperior />
    <main id="main">

      {/* <!-- ======= Breadcrumbs Section ======= -->*/}

      <Breadcrumbs title={"simulacion de pago"} />
  
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="portfolio-details" class="portfolio-details">
        <div className="container" data-aos="fade-up">
          <form className="portfolio-info" onSubmit={Pagar}>

            <div className="subcontainer">
              <div className="portfolio-info">
                <div className="row">
                  <div className="col-sm-2" style={{ fontWeight: "bold", textAlign: "center" }}>
                    <p>Codigo crédito</p>
                  </div>
                  <div className="col-sm-8">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Buscar codigo" required />
                  </div>
                  <div className="col-sm-1" style={{ fontWeight: "bold", textAlign: "center" }}>
                    <h3><AiOutlineSearch /></h3>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="portfolio-info">
              <div className="row ">
                <div className="col-sm-2">
                  <p style={{ fontWeight: "bold", fontStyle: "italic", textAlign: "left" }}>Simulación</p>
                </div>
              </div>


              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Codigo credito</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>Monto deuda</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Razon" readOnly />
                  <br />
                </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>¿Cuanto puedes pagar al mes?</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="cuota"  className="form-control" id="name" placeholder="Valor Cuota" required />

                  <br />
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-5" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" }}>¿Por cuantos meses?</p>
                </div>
                <div className="col-sm-7" style={{ textAlign: "left" }}>
                  <input type="text" name="cuotas"  className="form-control" id="name" placeholder="Numero de cuotas"   required />
              
                  <br /><br />
                </div>
                <div className="text-center"><Button type="submit"variant="light" style={{ boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)" }}>Realizar simulación</Button></div>
              </div>
            </div>

          </form>
          <div className="portfolio-info">
              <div className="row ">
                <div className="col-sm-2">
                  <p style={{ fontWeight: "bold", fontStyle: "italic", textAlign: "left" }}>Resultado</p>
                </div>
              </div>

              <div className="row ">
                <div className="col-sm-12" style={{ textAlign: "left" }}>
                  <textarea className="form-control" name="message" rows="5" placeholder="El resultado aparecerá aqui" readOnly></textarea>
                  <br />
                </div>
              </div>
            </div>
        </div>

      </section>{/* <!-- End Contact Section --> */}
    </main>{/* <!-- End #main --> */}
    <BarraInferior />
  </body >)

}


export default SimulacionPago;