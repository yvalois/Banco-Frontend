import React, {  useState, useEffect } from "react";
import { Button } from "bootstrap"








function FormPr (props){

  const {Solicitud}=props;


 

    return<div>


<form className="portfolio-info" data-aos="fade-up" onSubmit={Solicitud}>
              <div className="row ">
                <div className="col-lg-2">

                </div>
                <div className="col-sm-2">
                  <p style={{fontWeight: "bold", textAlign: "left"}}>Nueva solicitud</p>
                </div>
              </div>
              <div className="row">

              <div className="row ">

                <div className="col-sm-5" style={{textAlign:"right"}}>
                  <p style={{fontStyle: "italic"}}>Confirmar cedula usuario</p>
                </div>
                <div className="col-sm-5"style={{textAlign:"left"}}>
                  <input type="number" name="id_user" className="form-control" id="name" placeholder="Cédula" required />
                        
                  <br/>
                </div>
              </div>
              <div className="row ">

                <div className="col-sm-5" style={{textAlign:"right"}}>
                  <p style={{fontStyle: "italic"}}>Valor solicitado</p>
                </div>
                <div className="col-sm-5"style={{textAlign:"left"}}>
                  <input type="text" name="valor" className="form-control" id="name" placeholder="Valor solicitado" required />
                        
                  <br/>
                </div>
              </div>

              <div className="row ">

              <div className="col-sm-5" style={{textAlign:"right"}}>
                <p style={{fontStyle: "italic"}}>Tiempo en meses de cancelación</p>
              </div>
              <div className="col-sm-5"style={{textAlign:"left"}}>
                <input type="text" name="cuotas" className="form-control"  id="email" placeholder="Cuotas"  required />
                        
                <br/>
              </div>
              </div>

              <div className="row ">

                <div className="col-sm-5" style={{textAlign:"right"}}>
                  <p style={{fontStyle: "italic"}}>Comentarios a agregar</p>
                </div>
                <div className="col-sm-5"style={{textAlign:"left"}}>
                  <textarea className="form-control" name="message" rows="5" placeholder="Comentarios a agregar" ></textarea>
                  <br/>
                </div>
              </div>
              <div className="text-center"><Button type="submit"variant="light" style={{boxShadow: "0px 0 6px rgba(5, 1, 37, 0.8)"}}>Enviar Solicitud</Button></div>  
              </div>
            </form>

    </div>
}


export default FormPr;