import { Link} from "react-router-dom";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup, Button} from "react-bootstrap";
import { useEffect } from "react";
function Login({recibir}) {
  useEffect(() => {
    const usuario_storage = window.localStorage.getItem("usuario");
    if (usuario_storage!=null) {
      window.location.href="/index";
      }
  }); 

  const iniciar_sesion = (e) => {
    e.preventDefault();

    const datos_incio_sesion = {
      id: e.target.username.value,
      pass: e.target.passwword.value
    }
    recibir(datos_incio_sesion)
    

  };
  return (
  <body>
    <main id="main" style={{backgroundColor: "#F0DCF5"}}> 
    <div class="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets_general/img/logo.png" alt="" style={{width:"100px"}}/>
                  
                </a>
              </div>

              <div className="card mb-3"  style={{backgroundColor:"#DCD3F9"}}>

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Ingresa a tu cuenta</h5>
                    <p className="text-center small">Ingrese su usuario y contraseña</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate onSubmit={iniciar_sesion}>
                
                    <div class="col-12">
                        <label for="yourUsername" class="form-label">Número de identificación</label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">#</span>
                          <input type="number"  name="username" class="form-control" id="yourUsername" required/>
                          <div class="invalid-feedback">Por favor ingrese su usuario.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Contraseña</label>
                        <input type="password" name="passwword" class="form-control" id="yourPassword" required/>
                        <div class="invalid-feedback">Por favor ingrese su contraseña</div>
                      </div>

                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                          <label class="form-check-label" for="rememberMe">Recordarme</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <Button style={{float: "center"}} type="submit"  variant="primary">Ingresar</Button>{' '}
                      </div>
                      <div class="col-12">
                        <Link to="/registro"class="small mb-0">¿No tienes cuenta? <a>Crea una</a></Link>
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

export default Login;
