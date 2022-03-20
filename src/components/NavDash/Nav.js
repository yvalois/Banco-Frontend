import React from "react";
import { Link } from "react-router-dom";

const Nav =({usuario, desplegarBarra, cerrar_sesion, id}) =>{

    let desplegarBarraa =()=>{
        desplegarBarra()
    }

    

    return(<div className="container d-flex align-items-center justify-content-between">
  
    <div className="logo">
      <Link to="/index"><img src="assets_general/img/logo.png" alt="" className="img-fluid"/></Link>
      <a style={{fontWeight: "bold", paddingLeft: "30px", paddingTop: "10px"}}>Dashboard</a>
      <i class="bi bi-list toggle-sidebar-btn" onClick={desplegarBarraa} style={{top:"25px", fontSize: "32px", paddingLeft: "10px", cursor: "pointer", color: "#012970"}}></i>
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
  </div>)
}

export default Nav