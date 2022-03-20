
import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Certificado from './Certificado';

function Paginarender({nombre, id_user, codigo, cuotas_pen, cuotas_pag, cuota_cap, interes, cuota_total, dia, mes, año}) {
    
return (
    <div style={{minHeight:"100hv"}}>
    <PDFViewer style={{width:"100%", height:"100vh"}}>
        <Certificado nombre={nombre} id_user={id_user} codigo={codigo} cuotas_pen={cuotas_pen} cuotas_pag={cuotas_pag} cuota_cap={cuota_cap} interes={interes} cuota_total={cuota_total} dia={dia} mes={mes} año={año} />
    </PDFViewer>
    </div>

  )
}


export default Paginarender;