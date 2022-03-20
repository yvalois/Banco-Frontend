import { Link} from "react-router-dom";
import BarraInferior from "../components/BarraInferior";
import { useEffect } from "react";




function Inicio() {




  return (
  <body> <div style={{backgroundColor:"#D8E8F0 "}}>
    <header id="header1" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
  
        <div className="logo">
          <a href="index.html"><img src="assets_general/img/logo.png" alt="" className="img-fluid"/></a>
        </div>
      </div>
    </header>{/* <!-- End Header --> */}
    
    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero1" className="d-flex align-items-center" style={{width: "100%", height: "100vh", backgroundColor: "#00AAFF"}}>
  
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up" style={{color: "#fff"}}>Una misión para permitir el crecimiento y el progreso económico</h1>
            <h2 data-aos="fade-up" data-aos-delay="400"style={{color: "#fff"}}>Somos un banco global: confia tu crédito de libranza a nosotros</h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <br/><br/>
              <h5 style={{color: "#fff"}}>¿Eres un nuevo usuario? Registrate</h5>
              <Link to="/registro" className="btn-get-started scrollto">Crear usuario</Link>
              <br/><br/>
              <h5 style={{color: "#fff"}}>¿Usuario registrado? Ingresa</h5>
              <Link to="/login" className="btn-get-started scrollto">Login</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
            <img src="assets_general/img/hero-img.png" className="img-fluid animated" alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up"></h1>
            <h2 data-aos="fade-up" data-aos-delay="400"></h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <a>.</a>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <a>.</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
  
          </div>
        </div>
      </div>
      
    </section>{/* <!-- End Hero --> */}
    <BarraInferior/> </div>
  </body>
  );
}

export default Inicio;
