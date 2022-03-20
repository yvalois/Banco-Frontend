import { Link} from "react-router-dom";
import React, { Component, useState, useEffect } from "react";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
import ForCon from "../components/FormularioContactenos/ForCon";
import { Breadcrumb } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
function Contactenos() {
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
    
    const Contacto_cliente = (e) => {
      var h1="",h2=""
      var Error=0
      e.preventDefault();
      const mensaje_cliente = {
        nombre: document.getElementById("name").value,
        correo: document.getElementById("email").value,
        asunto: document.getElementById("subject").value,
        mensaje: document.getElementById("Mensaje").value
      };

  
      //Conexion al backend a traves de la api
      const registrar = (mensaje_cliente) => {
        fetch(`${process.env.REACT_APP_URL_BACKEND}/contacto_cliente`, {
          method: "POST",
          body: JSON.stringify(mensaje_cliente),
          headers: {
            "Content-Type": "application/json",
            "auth-token-jwt": token
          },
        })
          .then((res) => res.json())
          .then((response) => {
            alert(response.mensaje);
            window.location.href = "/contactenos";
          })
          .catch((error) => console.error("Error:", error))
      };
      //validacion nombre completo
      //+
      //Solo letras
      const onlilet=/^[a-zA-Z ]*$/g.test(mensaje_cliente.nombre);
      if (!onlilet) {
        Error=1
        h1="Nombre: No se permiten números."
      }

      const emailval=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mensaje_cliente.correo);
      if (!emailval) {
        Error=1
        h2="Email: Proporcione un correo válido."
      }
      
      if(Error == 0){ 
        registrar();
        
      }else if (Error == 1){
          alert(`Corrija los siguientes errores para poder enviar su mensaje de forma correcta:\n\n${h1}\n${h2}`);
      }
    };
  return (
  <body>
    <BarraSuperior/>  
    <main id="main">

     {/* <!-- ======= Breadcrumbs Section ======= -->*/}

         <Breadcrumbs title={"Contactenos"}/>

  
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
  
          <div className="section-title" data-aos="fade-up">
            <h2>Contacte con nosotros</h2>
            <br/>
          </div>
  
          <div className="row">
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-about">
                <Link to="/index"><img src="assets_general/img/logo.png" alt="" className="img-fluid" style={{ height:"200px"}}/></Link>
                <br/><br/><br/>
                <p>Por definir</p>
                <div className="social-links">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
              <div className="info">
                <div>
                  <i className="ri-map-pin-line"></i>
                  <p>Ubicacion</p>
                </div>
  
                <div>
                  <i className="ri-mail-send-line"></i>
                  <p>email</p>
                </div>
  
                <div>
                  <i className="ri-phone-line"></i>
                  <p>telefono</p>
                </div>
  
              </div>
            </div>
  
            <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="200">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={Contacto_cliente}>
    <div className="form-group">
      <input type="text" name="name" className="form-control" id="name" placeholder="Tu nombre" required/>
    </div>
    <div className="form-group">
      <input type="email" className="form-control" name="email" id="email" placeholder="Tu correo" required/>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required/>
    </div>
    <div className="form-group">
      <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
    </div>
    <div className="my-3">
      <div className="loading">Loading</div>
      <div className="error-message"></div>
      <div className="sent-message">Your message has been sent. Thank you!</div>
    </div>
    <div className="text-center"><button type="submit">Enviar mensaje</button></div>
  </form>
            </div>
  
          </div>
  
        </div>
      </section>{/* <!-- End Contact Section --> */}
    </main>{/* <!-- End #main --> */}
    <BarraInferior/>  
  </body>
  );
}

export default Contactenos;
