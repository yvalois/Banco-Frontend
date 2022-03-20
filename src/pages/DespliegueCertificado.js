import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Table, textarea, Button } from "react-bootstrap";
import { PDFViewer } from '@react-pdf/renderer';
import Paginarender from "./Paginarender";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch
} from "react-icons/ai";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";

function DespliegueCertificado() {
    const cod = window.localStorage.getItem("codigo");
    var d = new Date();
    const [Dia,setDia]= useState(d.getDate())
    const [Mes,setMes]= useState(d.getMonth()+1)
    const [Año,setAño]= useState(d.getFullYear())
    const [Codigo, setCodigo] = useState(cod)
    const nombre =window.localStorage.getItem("nombre");
    const id_user =  window.localStorage.getItem("id_user");
    const cuotas_pagadas =  window.localStorage.getItem("cuotas_pagadas");
    const cuotas_pendientes =  window.localStorage.getItem("cuotas_pendientes");
    const cuotas_capital =  window.localStorage.getItem("cuotas_capital");
    const cuotas_interes =  window.localStorage.getItem("cuotas_interes");
    const suma=((parseFloat(cuotas_capital))+(parseFloat(cuotas_interes)))
    const [Cuotas_pen, setCuotas_pen] = useState(cuotas_pendientes)
    const [Cuotas_pagadas, setCuotas_pagadas] = useState(cuotas_pagadas)
    const [Cuota_capital, setCuota_capital] = useState(cuotas_capital)
    const [Cuota_total, setCuota_total] = useState(suma)
    const [Interes, setInteres] = useState(cuotas_interes)
    const [Id_user, setId_user] = useState(id_user)
    const [Nombre, setNombre] = useState(nombre)
    let [token, setToken] = useState('');
    let [usuario, setUsuario] = useState('');
    
    useEffect(() => {
        const token_storage = window.localStorage.getItem("token-jwt");
        
        if (token_storage) {
          token = token_storage;
        } else {
          window.location.href="/";
        }
      });
      

  return (
    <body>
      <main id="main">
        {/* <!-- ======= Breadcrumbs Section ======= -->*/}

        <Paginarender nombre={Nombre} id_user={Id_user} codigo={Codigo} cuotas_pen={Cuotas_pen} cuotas_pag={Cuotas_pagadas} cuota_cap={Cuota_capital} interes={Interes} cuota_total={Cuota_total} dia={Dia} mes={Mes} año={Año}/>
        
      </main>{/* <!-- End #main --> */}
    </body>
  )
}



export default DespliegueCertificado;