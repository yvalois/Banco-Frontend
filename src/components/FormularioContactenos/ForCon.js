import React from "react";



const ForCon =({Contactenos})=>{


    let Contactocliente =(e)=>{
      
             const mensaje_cliente = {
        nombre: e.target.name.value,
        correo: e.target.email.value,
        asunto: e.target.subject.value,
        mensaje: e.target.message.value
      };
          


  Contactenos(mensaje_cliente)
    }

    return(<div>
    
    
    <form action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={Contactocliente}>
    <div className="form-group">
      <input type="text" name="name" className="form-control" id="name" placeholder="Tu nombre" required/>
    </div>
    <div className="form-group">
      <input type="email" className="form-control" name="email" id="email" placeholder="Tu correo" required/>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required/>
    </div>
    <div className="form-group">
      <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
    </div>
    <div className="my-3">
      <div className="loading">Loading</div>
      <div className="error-message"></div>
      <div className="sent-message">Your message has been sent. Thank you!</div>
    </div>
    <div className="text-center"><button type="submit">Enviar mensaje</button></div>
  </form>
  </div>)
}


export default ForCon