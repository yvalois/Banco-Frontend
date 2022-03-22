import { Link} from "react-router-dom";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";
function Principal() {
  const usuario_storage = JSON.parse(window.localStorage.getItem("usuario"));
if(usuario_storage.rol==1) {
    window.location.href="/dashboardadmin";
  }

  return (
  <body >
    <BarraSuperior/> 
    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="d-flex align-items-center" >
  
      <div className="container" >
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Financiamos tus sueños</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">Aunque somos un banco local, nuestro objetivo es: Proporciona responsablemente servicios financieros que permiten el crecimiento y el progreso económico</h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <Link to="/solicitudes" className="btn btn-outline-secondary ">Financiate</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
            <img src="assets_general/img/billetera.png" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
  
    </section>{/* <!-- End Hero --> */}
  
    
  
      {/* <!-- ======= Clients Section ======= --> */}
      
    <BarraInferior/> 
  </body>
  );
}

export default Principal;
