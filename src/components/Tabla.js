import React from "react";
import { Table } from "react-bootstrap";

const Tabla = ({ campos, datos, attrs, bus, bus_act }) => {
  let click_rechazar = (e) => {
    bus(e.target.id);
    alert(e.target.id)
  };

  let click_aceptar = (e) => {
    bus_act(e.target.id)

  };

  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          {campos.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => {
          
          return (
            <tr key={index}>
              {attrs.map((attr) => {
                return <td>{item[attr]}</td>;
              })}
              <td>
                <button id={item["_id"]} onClick={click_aceptar}>
                  Aceptar
                </button>
                <button id={item["_id"]} onClick={click_rechazar}>
                  Rechazar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabla;
