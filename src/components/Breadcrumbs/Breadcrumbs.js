import React from "react";
import { Link } from "react-router-dom";


const Breadcrumbs=({title})=>{

    return(        
    <div >
    <section className="breadcrumbs" style={{backgroundColor:"#DCD1E5   "}}>
    <div className="container">

      <div className="d-flex justify-content-between align-items-center">
        <h2 style={{paddingTop:"10px"}}>{title}</h2>
        <ol style={{paddingTop:"10px"}}>
          <li ><Link to="/index">Home</Link></li>
          <li>{title}</li>
        </ol>
      </div>
    </div>
  </section>{/*<!-- End Breadcrumbs Section -->*/}

  {/* <!-- ======= Contact Section ======= --> */}
  </div>
    )


}

export default Breadcrumbs