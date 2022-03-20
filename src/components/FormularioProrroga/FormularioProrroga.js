import React from "react";
import { Button } from "bootstrap";
import { useState,useEffect } from "react";

const FormP =({Estado, ocultarFormulario, Codigo, Estado_sol, Cuotas_pen})=>{
    let [token] = useState('');
    
    
    
    useEffect(() => {
        
        const token_storage = window.localStorage.getItem("token-jwt");
        if (token_storage) {
          token = token_storage;
          
        }
      });

      const Prorroga = (e) => {
        var h1="",h2="", h3="", h4="", h5=""
        var Error=0
      e.preventDefault();
    
      const prorroga = {
        prorroga: true,
        razon_prorroga: document.getElementById("razon_prorroga").value,
        cuotas_prorroga: document.getElementById("cuotas_prorroga").value
      };
    
    
      const registrarProrroga = () => {
        fetch(`${process.env.REACT_APP_URL_BACKEND}/actualizar_solicitud/${Codigo}`, {
          method: "PUT",
          body: JSON.stringify(prorroga),
          headers: {
            "Content-Type": "application/json",
            "auth-token-jwt": token,
          },
        })
          .then((res) => res.json())
          .then((response) => {
            alert(response.mensaje);
            window.location.href="/consultas"
          })
          .catch((error) => console.error("Error:", error));
      };
    
      
      //validacion solicitado completo
      //+
      //Solo letras
      const valor=/^[a-zA-Z ]*$/g.test(prorroga.razon_prorroga);
      if( !valor){
        Error=1
        h1="Razon: No se permiten numeros"
        
      }
      const cuota=/^[0-9\b]+$/g.test(prorroga.cuotas_prorroga);
      if(!cuota){
        Error=1
        h2="Cuotas: Se permiten solo numeros"
        
      }
      if(Estado_sol==0||Estado_sol==1||Estado_sol==undefined ){
        Error=1
        h3="Estado: El crédito aun no ha sido aprobado."
        
      }
      var calculo=((25*Cuotas_pen)/100);
      if(prorroga.cuotas_prorroga>calculo){
        Error=1
        h4=`Cuotas: Recuerde que la cantidad de cuotas no podrá ser mayor al 25% de la cantidad de cuotas restantes, que en este momento representa ${calculo} cuotas. Ponganse en contacto con el banco si desea mas información.`
      }
      if(prorroga.cuotas_prorroga>6){
        Error=1
        h5="Cuotas: Recuerde que el máximo de cuotas a aplazar son 6."
        
      }
      
      if(Error == 0){ 
        registrarProrroga();
        
      }else if (Error == 1 ){
          alert(`Corrija los siguientes errores para poder registrar su solicitud correcta:\n${h1}\n\n${h2}\n\n${h3}\n\n${h4}\n\n${h5}`);
      }
    
    }
    


    
    return(<div>           </div>)
}

export default FormP