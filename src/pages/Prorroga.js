import { Link} from "react-router-dom";
import React, {Component} from "react";
import {Dropdown, DropdownButton, Form, FormControl,InputGroup,Table,textarea, Button} from "react-bootstrap";
import { AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillMoneyCollect,
  AiFillBank,
  AiOutlineSearch }from "react-icons/ai";
  class Prorroga extends React.Component {
  
    quitar = (event) => {
  
      let mostrarNuevo = this.state.mostrar
      mostrarNuevo[event.target.parentNode.id] = false
  
      this.setState({
        mostrar: mostrarNuevo
      })
  
      console.log(this.state.mostrar);
  
    }
    render(){
      return(<body>
        <form>
          <div className="col-lg-6">
            <h4>Prorroga</h4>
            </div>
            <br/><br/><br/>
            
            <div className="col-lg-4">

          </div>
          <div className="col-lg-4">
          <input type="text" name="name" className="form-control" id="name" placeholder="Razon" required/>
          <br/>
            </div>
            <div className="col-lg-4">

          </div>
            <div className="col-lg-4">

          </div>
            <div className="col-lg-4">
          <input type="text" name="name" className="form-control" id="name" placeholder="Cantidad de cuotas" required/>
            </div>
        </form>    
        </body>)
    }
}



export default Prorroga;