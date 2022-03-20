import React from "react";



const FormC =({ Valor, Tiempo, Codigo, Prorr, Estado_prorr, Cuotas_pagadas, Cuotas_pen, Cuota_capital, Interes,Cuota_total, Estado_sol})=>{


    return(
      <><div className="row ">
        <div className="row ">

<div className="col-sm-5" style={{ textAlign: "center" }}>
  <p style={{ fontWeight: "bold" }}>Codigo credito</p>
</div>
<div className="col-sm-7" style={{ textAlign: "left" }}>
  <input type="text" name="name" className="form-control" id="name"  value={Codigo} readOnly />
  <br />
</div>
</div>

        <div className="col-sm-5" style={{ textAlign: "center" }}>
          <p style={{ fontWeight: "bold" }}>Valor total solicitado</p>
        </div>
        <div className="col-sm-7" style={{ textAlign: "left" }}>
          <input type="text" name="name" className="form-control" id="name"  value={Valor} readOnly />
          <br />
        </div>
      </div><div className="row ">

          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Tiempo solicitado de cancelación (meses)</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Tiempo} readOnly />
            <br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Estado de solicitud de credito</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Estado_sol}readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Prorroga solicitada (meses)</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Prorr} readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Estado de estudio de prorroga añadida, si aplica</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Estado_prorr} readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Cuotas pagadas</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Cuotas_pagadas} readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Cuotas pendientes</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Cuotas_pen} readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Cuota capital</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Cuota_capital} readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Interes</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Interes} readOnly />
            <br /><br />
          </div>
        </div><div className="row ">
          <div className="col-sm-5" style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>Cuota total (capital+interes)</p>
          </div>
          <div className="col-sm-7" style={{ textAlign: "left" }}>
            <input type="text" name="name" className="form-control" id="name"  value={Cuota_total} readOnly />
            <br /><br />
          </div>
        </div></>

    )
}

export default FormC