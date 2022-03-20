import React, { useState, useEffect } from "react";
import Tabla from "../components/Tabla";
import { Link, useNavigate } from "react-router-dom";

import BarraSuperior from "../components/BarraSuperior"
const Solicitudprorroga = () => {
  const [Mensajes, setMensajes] = useState([]);
  let [token, setToken] = useState('');
  let [sw, setSw] = useState(true);
  let [Estado, setEstado]= useState();
  let navegacion = useNavigate();

  useEffect(() => {

    const token_storage = window.localStorage.getItem("token-jwt");
    if (token_storage) {
      token = token_storage;
    } else {
      navegacion("/");
    }
    if (sw) {
      llenar_tabla();
      setSw(false)
    }
    // llenar_tabla();
  });

  let campos = ["Codigo","cedula", "Razon", "valor","cuotas a aplazar","accion"];

  let attrs = ["codigo","id_user", "razon_prorroga","valor","cuotas_prorroga" ];

  let llenar_tabla = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/get_solicitud`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMensajes(data);
      });
  };

  /*let Rechazar = id => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/api/eliminar_fruta/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        llenar_tabla()
      })
      .catch((error) => console.error("Error:", error));
  }*/

  const solicitud_aprobada2 = {
    
    estado_prorroga: 2,
    
  };
  
    const Aceptar1 = id => {
      fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_prorroga/${id}`, {
        method: "PUT",
        body: JSON.stringify(solicitud_aprobada2),
        headers: {
          "Content-Type": "application/json",
          "auth-token-jwt": token
        },
      })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje)
      })
      .catch((error) => console.error("Error:", error));
      };

      const solicitud_rechazada2 = {
    
        estado_prorroga: 1,
        
      };
      
        const Rechazar1 = id => {
          fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_prorroga/${id}`, {
            method: "PUT",
            body: JSON.stringify(solicitud_rechazada2),
            headers: {
              "Content-Type": "application/json",
              "auth-token-jwt": token
            },
          })
          .then((res) => res.json())
          .then((response) => {
            alert(response.mensaje)
          })
          .catch((error) => console.error("Error:", error));
          };
  

  return (<div>
    <BarraSuperior />
    <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Solicitudes de Prorroga</h2>
              <ol>
                <li><Link to="/Dashboardint">Dashboard</Link></li>
                <li>Solicitud de Prorroga</li>
              </ol>
            </div>
          </div>
        </section>{/*<!-- End Breadcrumbs Section -->*/}
        <div>
    <br/>
    <br/>
    <div className="row">
    <div className="col-md-1">
      <a></a>
      </div>
    <div className="col-md-10">
      <Tabla campos={campos} datos={Mensajes} attrs={attrs} bus={Rechazar1} bus_act={Aceptar1}/>
    </div>
    </div>
    
  </div>
  </div>
    
  );
};

export default Solicitudprorroga;
