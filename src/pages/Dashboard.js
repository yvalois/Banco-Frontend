import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/NavDash/Nav";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function Dashboard() {

  const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"));
if(usuario_storage.rol==1) {
    window.location.href="/dashboardadmin";
  }

  
    let [token, setToken] = useState('');
    let [usuario, setUsuario] = useState('');
    let [id, setId] = useState(''); 
    let [fechaNaci, setFechaNaci] = useState('');
    let [ingresos, setIngresos] = useState('');
    let [egresos, setEgresos] = useState('');
    let [bimobile, setBimobile] = useState('');
    let [valueNam, setValueNam] = useState(usuario_storage.nombre);
    let [valuefechaNaci, setValuefechaNaci] = useState(usuario_storage.nacimiento);
    let [valueIngr, setValueIngr] = useState(usuario_storage.ingresos);
    let [valueEgr, setValueEgr] = useState(usuario_storage.egresos);
    useEffect(() => {
      const token_storage = window.localStorage.getItem("token-jwt");
      if (token_storage) {
        token = token_storage;
        usuario=setUsuario(usuario_storage.nombre);
        id=setId(usuario_storage.id);
        fechaNaci=setFechaNaci(usuario_storage.nacimiento);
        ingresos=setIngresos(usuario_storage.ingresos);
        egresos=setEgresos(usuario_storage.egresos);
      } else {
        window.location.href="/";
      }
    }); 
  let cerrar_sesion = () => {
    window.localStorage.removeItem("token-jwt");
    window.localStorage.removeItem("usuario");
    window.location.href = '/'
  };

  var cont=0
  const desplegarBarra= () => {
    if (cont==0){
      setBimobile("toggle-sidebar")
      cont=1
    } else if (cont==1){
      setBimobile("")
      cont=0
    }
  };

  const cambiarValueNombre = () => {
    setValueNam(undefined)
  };

  const cambiarValueFecha = () => {
    setValuefechaNaci(undefined)
  };

  const cambiarValueIng = () => {
    setValueIngr(undefined)
  };

  const cambiarValueEgr = () => {
    setValueEgr(undefined)
  };

  const actualizar_cliente = (e) => {
    var h1="",h2="",h3="",h4="",h5="",h6=""
    var Error=0
    e.preventDefault();

    const nuevos_datos = {
      nombre: e.target.nombre.value,
      nacimiento: e.target.fechaNaci.value,
      ingresos: e.target.ingresos.value,
      egresos: e.target.egresos.value
    };

    //Conexion al backend a traves de la api
    const actualizar = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_usuario/${usuario_storage.id}`, {
      method: "PUT",
      body: JSON.stringify(nuevos_datos),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
        alert("Para actualizar sus datos, se cerrará su sesión. Será redirigido al Login.");
        cerrar_sesion();
        window.location.href="/login"
      })
      .catch((error) => console.error("Error:", error));
    };
  const onlilet=/^[a-zA-Z ]*$/g.test(nuevos_datos.nombre);
  if (!onlilet) {
    Error=1
    h1="Nombre completo: No se permiten números."
  }
  //validacion mayor de edad
  if(nuevos_datos.nacimiento > "2003/12/10"){
    Error=1
    h2="Fecha de nacimiento: Solo mayores de edad."
  }
  const ing_num=/^[0-9\b]+$/g.test(nuevos_datos.ingresos);
  const egr_num=/^[0-9\b]+$/g.test(nuevos_datos.egresos);
  if(nuevos_datos.ingresos < 877803){
    Error=1
    h3="Valor de ingresos: Ingresos bajos."
  }
  if(!ing_num){
    Error=1
    h4="Valor de ingresos: No se permiten letras."
  }
  //validacion egresos
  if(nuevos_datos.egresos < 50000){
    Error=1
    h5="Valor de egresos: Egresos bajos."   
  }
  if(!egr_num){
    Error=1
    h6="Valor de egresos: No se permiten letras."
  }
  
  if(Error == 0){ 
    actualizar();
    
  }else if (Error == 1){
      alert(`Corrija los siguientes errores para poder actualizar su usuario de forma correcta:\n\n${h1}\n${h2}\n${h3}\n${h4}\n${h5}\n${h6}`);
  }
};

const verificar_contraseña = (e) => {
  var h1="",h2=""
  var Error=0
  e.preventDefault();

  const contraseña_actual = {
    id: usuario_storage.id,
    pass: e.target.password.value
  }

  const contraseña_nueva = {
    newpass: e.target.newpassword.value,
    renewpass: e.target.renewpassword.value
  }
  
  const verificacion_actual = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/verificar`, {
      method: "POST",
      body: JSON.stringify(contraseña_actual),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.mensaje==true) {
          actualizar_contraseña();
        }else{
          alert(response.mensaje);
        } 
      })
      .catch((error) => console.error("Error:", error));
  };
  
  const actualizar_contraseña = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_contrasena/${usuario_storage.id}`, {
      method: "PUT",
      body: JSON.stringify(contraseña_nueva),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.mensaje);
        alert("Para actualizar su contraseña, se cerrará su sesión. Será redirigido al Login.");
        cerrar_sesion();
        window.location.href="/login"
      })
      .catch((error) => console.error("Error:", error));
    };

    //validacion contraseña
    if(contraseña_nueva.newpass!=contraseña_nueva.renewpass){
      Error=1
      h1="Coincidencia nueva contraseña: La nueva contraseña no coincide con la escrita en el tercer campo."
    }
    const pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^\W]{8,40}/g.test(contraseña_nueva.newpass);
    if(!pass){
      Error=1
      h2="Nueva contraseña: No es válida de acuerdo a los parametros establecidos."
    }
    
    if(Error == 0){ 
      verificacion_actual();
      
    }else if (Error == 1){
        alert(`Corrija los siguientes errores para poder actualizar su contraseña de forma correcta:\n\n${h1}\n${h2}`);
    } 

};

  return (
    <body className={bimobile}>
      {/*<!-- ======= Header ======= -->*/}
      <header id="header" className="fixed-top d-flex align-items-center" style={{backgroundColor:"#DCE3F5"}}>
        <div className="container d-flex align-items-center justify-content-between">
  
          <div className="logo">
            <Link to="/index"><img src="assets_general/img/logo.png" alt="" className="img-fluid" style={{height:"70px", width:"50px", paddingBottom:"5px"}}/></Link>
            <a style={{fontWeight: "bold", paddingLeft: "15px", paddingTop: "10px"}}>Dashboard</a>
            <i class="bi bi-list toggle-sidebar-btn" onClick={desplegarBarra} style={{top:"25px", fontSize: "32px", paddingLeft: "10px", cursor: "pointer", color: "#012970"}}></i>
          </div>

        <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">

            <li className="nav-item dropdown pe-3" style={{listStyleType: "none"}}>

            <a className="nav-link1 nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="assets_general/img/profile-img.png" alt="Profile" className="rounded-circle"/>
                <span className="d-none d-md-block dropdown-toggle ps-2">{usuario}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                <h6>{usuario}</h6>
                <span>ID.{id}</span>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <Link to="/dashboard" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-person"></i>
                    <span>Mi perfil</span>
                </Link>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <Link to="/contactenos" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-question-circle"></i>
                    <span>¿Necesita ayuda?</span>
                </Link>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <a className="dropdown-item d-flex align-items-center" onClick={cerrar_sesion}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span style={{cursor: "pointer"}}>Cerrar Sesión</span>
                </a>
                </li>

            </ul>
            </li>

        </ul>
        </nav>
        </div>
        </header>
      {/* <!-- ======= Breadcrumbs Section ======= -->*/}
      <section className="breadcrumbs" style={{backgroundColor:"#D8E8F0 ", padding:"0px"}}>


            
        </section>{/*<!-- End Breadcrumbs Section -->*/}
      {/*<!-- ======= Sidebar ======= -->*/}
      <aside id="sidebar" className="sidebar1" style={{backgroundColor:"#DCE3F5", padding:"0px"}}>

        <ul className="sidebar-nav1" id="sidebar-nav1">

          
          <li className="nav-heading1"></li>
          <br /><li className="nav-heading1">Pages</li><br />

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px", borderRadius:"20px"}}>
            <Link to="/index" className="nav-link1 collapsed">
              <i className="bi bi-house"></i>
              <span>Inicio</span>
            </Link>
          </li>{/*<!-- End Profile Page Nav -->*/}

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px "}}>
            <Link to="/solicitudes" className="nav-link1 collapsed">
              <i className="bi bi-cash-coin"></i>
              <span>Solicitudes</span>
            </Link>
          </li>{/*<!-- End F.A.Q Page Nav -->*/}

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px "}}>
            <Link to="/simulacionpago" className="nav-link1 collapsed">
              <i className="bi bi-currency-dollar"></i>
              <span>Pagos</span>
            </Link>
          </li>{/*<!-- End Contact Page Nav -->*/}

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px "}}>
            <Link to="/consultas" className="nav-link1 collapsed">
              <i className="bi bi-search"></i>
              <span>Consultas</span>
            </Link>
          </li>{/*<!-- End Register Page Nav -->*/}

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px "}}>
            <Link to="/simulacionpago" className="nav-link1 collapsed">
              <i className="bi bi-wallet2"></i>
              <span>pago</span>
            </Link>
          </li>{/*<!-- End Login Page Nav -->*/}

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px "}}>
            <Link to="/contactenos" className="nav-link1 collapsed">
              <i className="bi bi-chat-dots"></i>
              <span>Contactenos</span>
            </Link>
          </li>{/*<!-- End Error 404 Page Nav -->*/}

          <li className="nav-item1 " style={{width:"270px", paddingLeft:"20px "}}>
            <a className="nav-link1 collapsed" onClick={cerrar_sesion}>
              <i className="bi bi-box-arrow-left"></i>
              <span style={{cursor: "pointer"}}>Cerrar sesión</span>
            </a>
          </li>{/*<!-- End Blank Page Nav -->*/}

        </ul>

      </aside>{/*<!-- End Sidebar-->*/}

      <main id="main1" className="main">

        <div className="pagetitle" data-aos="fade-up">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/dashboard">Perfil</Link></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>{/*<!-- End Page Title -->*/}

        <section className="section profile" data-aos="fade-up">
          <div className="row">
            <div className="col-xl-4">

              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                  <img src="assets_general/img/profile-img.png" alt="Profile" className="rounded-circle"/>
                  <h2 style={{textAlign:"center"}}>{usuario}</h2>
                  <h3 style={{fontStyle: "italic"}}>Cliente Citybank</h3>
                  <h4>ID.{id}</h4>
                </div>
              </div>

            </div>

            <div className="col-xl-8">

              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">

                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">General</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Editar perfil</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Cambiar contraseña</button>
                    </li>

                  </ul>
                  <div className="tab-content pt-2">

                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title" style={{fontStyle: "italic"}}>Detalles de perfil</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label " style={{fontWeight: "bold"}}>Nombre</div>
                        <div className="col-lg-9 col-md-8">{usuario}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>ID</div>
                        <div className="col-lg-9 col-md-8">{id}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Fecha de nacimiento</div>
                        <div className="col-lg-9 col-md-8">{fechaNaci}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Ingresos</div>
                        <div className="col-lg-9 col-md-8">{ingresos}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Egresos</div>
                        <div className="col-lg-9 col-md-8">{egresos}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label" style={{fontWeight: "bold"}}>Rol</div>
                        <div className="col-lg-9 col-md-8">Cliente Citybank</div>
                      </div>
                    </div>

                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                      <form onSubmit={actualizar_cliente}>
                        <div className="row mb-3">
                          <label for="nombre" className="col-md-4 col-lg-3 col-form-label">Nombre</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="nombre" type="text" className="form-control" id="nombre" value={valueNam} onClick={cambiarValueNombre} />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="id" className="col-md-4 col-lg-3 col-form-label">ID</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="id" type="text" className="form-control" id="id" value={id} readOnly/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="fechaNacimiento" className="col-md-4 col-lg-3 col-form-label">Fecha de nacimiento</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="fechaNaci" type="date" className="form-control" id="fechaNaci" value={valuefechaNaci} onClick={cambiarValueFecha}/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="ingresos" className="col-md-4 col-lg-3 col-form-label">Ingresos</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="ingresos" type="text" className="form-control" id="ingresos" value={valueIngr} onClick={cambiarValueIng}/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="egresos" className="col-md-4 col-lg-3 col-form-label">Egresos</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="egresos" type="text" className="form-control" id="egresos" value={valueEgr} onClick={cambiarValueEgr}/>
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Guardar cambios</button>
                        </div>
                      </form>

                    </div>

                    <div className="tab-pane fade pt-3" id="profile-change-password">
                      <form onSubmit={verificar_contraseña}>

                        <div className="row mb-3">
                          <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Contraseña actual</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="password" type="password" className="form-control" id="currentPassword" required/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">Nueva contraseña</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="newpassword" type="password" className="form-control" id="newPassword" required/>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Ingrese otra vez la nueva contraseña</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="renewpassword" type="password" className="form-control" id="renewPassword" required/>
                          </div>
                        </div>

                        <div style={{ fontSize: "small"}}><label>La contraseña puede contener letras (a-z) y números (0-9). Debe tener mínimo 8 caracteres, máximo 40. Mínimo debe contener un carácter en (1) mayúsculas y uno (1) en minúsculas. Mínimo debe contener un número del 0 al 9. La contraseña puede comenzar o contener un guion bajo (_) solamente. Ningún otro carácter está permitido.</label></div>
                        <br></br>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Cambiar contraseña</button>
                        </div>
                      </form>

                    </div>

                  </div>

                </div>
              </div>


              

            </div>
            <br /><br /><br />
            <div className="card">
              </div>

              <div class="card-body" style={{ width:"50px",  }}>

              </div>
          </div>
          
        </section>
      </main>{/*<!-- End #main -->*/}
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </body>
  );
}

export default Dashboard;
