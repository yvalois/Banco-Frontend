import { Link} from "react-router-dom";
import React from "react";

function BarraInferior() {
    return (
    <body >
        {/* <!-- ======= Header ======= --> */}
    <footer id="footer" style={{backgroundColor:"#DCE3F5 "}}>
      <div className="container" style={{backgroundColor:"#DCE3F5 ", padding:"0px"}} >
        
        <div className="row">
        <div className="col-lg-4 text-lg-left text-center"><a href="#">Contactanos</a></div>
          
        

        <div className="col-lg-4 text-lg-left text-center"><a href="#">Ubicacion:un barrio x compita</a></div>


        <div className="col-lg-4 text-lg-left text-center"><a href="#">Correo: Josefita2003@gmail.com</a></div>
        </div>

        <br/>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 text-lg-left text-center">
            <div className="copyright">
              &copy; Copyright <strong>David</strong>. All Rights Reserved
            </div>
            <div class="credits">
              {/*<!-- All the links in the footer should remain intact. -->*/}
              {/*<!-- You can delete the links only if you purchased the pro version. -->*/}
              {/*<!-- Licensing information: https://bootstrapmade.com/license/ -->*/}
              {/*<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ -->*/}
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
              <a href="#intro" className="scrollto">Home</a>
              <a href="#about" className="scrollto">About</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </nav>
          </div>
        </div>
      </div>
    </footer> {/*<!-- End Footer -->*/}
    </body>
    );
  }
  
  export default BarraInferior;
  