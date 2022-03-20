import React from "react";
import {AiOutlineSearch} from "react-icons/ai";


const Sc =({consultar})=>{
    let consultars=()=>{

        consultar(document.getElementById("id_solicitud").value)
    }


    return(<div className="subcontainer">
    <div className="portfolio-info">
      <form className="row">
        <div className="col-sm-2" style={{ fontWeight: "bold", textAlign: "center" }}>
          <p>Codigo crédito</p>
        </div>
        <div className="col-sm-8">
          <input type="text" name="id_solicitud" className="form-control" id="id_solicitud" placeholder="Buscar codigo" required />
        </div>
        <div className="col-sm-1" style={{ fontWeight: "bold", textAlign: "center" }}>
          <h3><AiOutlineSearch onClick={consultars}/></h3>
        </div>
      </form>
    </div>
  </div>)
}


export default Sc