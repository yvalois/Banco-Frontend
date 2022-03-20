import { Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup, Button} from "react-bootstrap";

function RegistroUsuario() {
  const Registrar_usuario = (e) => {
    var h1="",h2="",h3="",h4="",h5="",h6="",h7="", h8="", h9="", h10="",h11="",h12=""
    var Error=0
    e.preventDefault();
  
    const datos_registro = {
      nombre: e.target.name.value,
      id: e.target.username.value,
      nacimiento: e.target.dateborn.value,
      expedicion: e.target.dateExp.value,
      ingresos: e.target.ingresos.value,
      egresos: e.target.egresos.value,
      pass: e.target.pass.value
    };

    //Conexion al backend a traves de la api
    const registrar = () => {
      fetch(`${process.env.REACT_APP_URL_BACKEND}/crear_usuario`, {
        method: "POST",
        body: JSON.stringify(datos_registro),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          alert(response.mensaje);
          window.location.href = "/login";
        })
        .catch((error) => console.error("Error:", error))
    };
    //validacion nombre completo
    //+
    //Solo letras
    const onlilet=/^[a-zA-Z ]*$/g.test(datos_registro.nombre);
    if (!onlilet) {
      Error=1
      h1="Nombre completo: No se permiten números."
    }
    //validacion id
    //solo numeros
    const onlinum=/^[0-9\b]+$/g.test(datos_registro.id);
    if(!onlinum){
      Error=1
      h2="Número de identificación: Solo se permiten números."
    }
    //max caracteres
    const caracteres=datos_registro.id.length
    if(caracteres < 10 || caracteres>  10){
      Error=1
      h3="Número de identificación: Solo se permiten 10 caracteres."
    }
    //validacion mayor de edad
    if(datos_registro.nacimiento > "2003/12/10"){
      Error=1
      h4="Fecha de nacimiento: Solo mayores de edad."
    }
    //validacion fecha invalidad
    if(datos_registro.expedicion>"2022/12/31"){
      Error=1
      h5="Fecha de expedición:Fecha invalida."
    }
    
    //validacion ingresos
    const ing_num=/^[0-9\b]+$/g.test(datos_registro.ingresos);
    const egr_num=/^[0-9\b]+$/g.test(datos_registro.egresos);
    const pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^\W]{8,40}/g.test(datos_registro.pass);
    
    if(datos_registro.ingresos < 1000000){
      Error=1
      h6="Valor de ingresos: Ingresos bajos."
    }
    if(!ing_num){
      Error=1
      h7="Valor de ingresos: No se permiten letras."
    }
    //validacion egresos
    if(datos_registro.egresos < 500000){
      Error=1
      h8="Valor de egresos: Egresos bajos."   
    }
    if(!egr_num){
      Error=1
      h9="Valor de egresos: No se permiten letras."
    }
//validacion contraseña
    if(!pass){
      Error=1
      h10="Contraseña: No es válida de acuerdo a los parametros establecidos."
    }


    
    if(Error == 0){ 
      registrar();
      
    }else if (Error == 1){
        alert(`Corrija los siguientes errores para poder registrar su usuario de forma correcta:\n\n${h1}\n${h2}\n${h3}\n${h4}\n${h5}\n${h6}\n${h7}\n${h8}\n${h9}\n${h10}`);
    }
  };



  return (
  <body>
    <main id="main" style={{backgroundColor: "#F0DCF5"}}> 
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <img src="assets_general/img/logo.png" alt="" style={{width:"100px"}}/>
                  
                </a>
              </div>

              <div className="card mb-3" style={{backgroundColor:"#DCD3F9"}}>

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Crear una cuenta</h5>
                    <p className="text-center small">Ingrese los siguientes datos para crear su cuenta</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate onSubmit={Registrar_usuario}>
                    <div className="col-12">
                      <label for="yourName" className="form-label">Nombre completo</label>
                      <input type="text" name="name" className="form-control" id="yourName"  required/>

                      <div className="invalid-feedback">¡Por favor introduzca su nombre!</div>
                    </div>



                    <div className="col-12">
                      <label for="yourUsername" className="form-label">Número de identificación</label>
                      <div className="input-group has-validation">
                        <input type="text" name="username" className="form-control" id="yourUsername"   required/>

                        <div className="invalid-feedback">Por favor ingrese un numero de identificacion</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateBorn" className="form-label">Fecha de nacimiento</label>
                      <input type="date" name="dateborn" className="form-control" id="yourDateBorn" required/>
                      <div className="invalid-feedback">Ingrese su fecha de nacimiento</div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateExp" className="form-label">Fecha de expedicion del documento</label>
                      <input type="date" name="dateExp" className="form-control" id="yourDateExp" required/>
                      <div className="invalid-feedback">Ingrese su fecha de expedicion del documento</div>
                    </div>


                    <div className="col-12">
                      <label for="yourValueIng" className="form-label" id="ingresos">Valor de ingresos</label>
                      <InputGroup className="mb-3" >
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.000</InputGroup.Text>
                    <FormControl aria-label="Dollar amount (with dot and three decimal places)" name="ingresos" />
                  </InputGroup>
                  
                      <div className="invalid-feedback">Ingrese el valor de sus ingresos</div>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" className="form-label" id="egresos">Valor de egresos</label>
                      <InputGroup className="mb-3" >
                    <InputGroup.Text >$</InputGroup.Text>
                    <InputGroup.Text>0.000</InputGroup.Text>
                    <FormControl aria-label="Dollar amount (with dot and three decimal places)" name="egresos" />
                  </InputGroup>

                      <div className="invalid-feedback">Ingrese el valor de sus egresos</div>
                    </div>

                  <div className="col-12">
                    <label for="yourPass" className="form-label">Contraseña</label>
                    <input type="text" name="pass" className="form-control" id="yourPass"  required/>

                    <div style={{ fontSize: "small"}}><label>La contraseña puede contener letras (a-z) y números (0-9). Debe tener mínimo 8 caracteres, máximo 40. Mínimo debe contener un carácter en (1) mayúsculas y uno (1) en minúsculas. Mínimo debe contener un número del 0 al 9. La contraseña puede comenzar o contener un guion bajo (_) solamente. Ningún otro carácter está permitido.</label></div>
                  </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label className="form-check-label" for="acceptTerms">Yo acepto <a href="#"> los terminos y las condiciones</a></label>
                        <div className="invalid-feedback">Debe aceptar antes de enviar su información.</div>
                      </div>
                    </div>
                    <div className="col-12">
                    <Button type="submit"  variant="primary">Crear cuenta</Button>{' '}
                    </div>
                    <div className="col-12">
                      <Link to="/login" className="small mb-0">¿Ya tiene una cuenta? <a >Ingrese</a></Link>
                    </div>
                  </form>

                </div>
              </div>

              <div className="credits">
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>


    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default RegistroUsuario;
