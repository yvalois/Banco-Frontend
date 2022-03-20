import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import React, { useState, useEffect } from "react";
import { PDFViewer } from '@react-pdf/renderer';

function Certificado({nombre, id_user, codigo, cuotas_pen, cuotas_pag, cuota_cap, interes, cuota_total, dia, mes, año}) {
    const [Cuotas_pen, setCuotas_pen] = useState(cuotas_pen)
    const [Codigo, setCodigo] = useState(codigo)
    const [Cuotas_pagadas, setCuotas_pagadas] = useState(cuotas_pag)
    const [Cuota_capital, setCuota_capital] = useState(cuota_cap)
    const [Cuota_total, setCuota_total] = useState(cuota_total)
    const [Interes, setInteres] = useState(interes)
    const [Id_user, setId_user] = useState(id_user)
    const [Nombre, setNombre] = useState(nombre)
    const [Dia,setDia]= useState(dia)
    const [Mes,setMes]= useState(mes)
    const [Año,setAño]= useState(año)
    
        
    const styles = StyleSheet.create({
        body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        letterHeight: "20%",
        },
       
        title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
        },
        author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
        },
        subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
        },
        text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
        },

        text2: {
          margin: 12,
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Times-Roman'
          },
        image: {
        marginVertical: 15,
        marginHorizontal: 100,
        width:"150px",
        left:"90px",
        top:"-10px"
        },

        image2: {
          marginVertical: 15,
          marginHorizontal: 100,
          height:"25vh",
          width:"80vh",
          position:"absolute",
          top:"490px",
          left:"-140px",
          right:"20px",
          },
        header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
        },
        pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
        },
    });



return (
    <>
    <Document>
    <Page size="LETTER" style={styles.body}>
      <View>
        <Image style={styles.image} src="assets_general/img/Citibank.png"
        />
        
        <Text style={styles.text2}>La División Nacional Sucursal Caribe de Citigroup Inc certifica que </Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.text}>{Nombre} identificado
        con número de identificación {Id_user} tiene en este banco registrado el crédito con código {Codigo} del cual
        tiene {Cuotas_pagadas} cuota(s) pagada(s) y {Cuotas_pen} cuota(s) pendiente(s) por pagar,
        teniendo en cuenta una valor de cuota de $ {Cuota_total} pesos, lo cual contempla un valor de capital de $ {Cuota_capital} pesos y un valor
        de intereses de $ {Interes} pesos.</Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.text}>Dado en Barranquilla a los {Dia} dias del mes {Mes} del año {Año}  </Text>
        <Text style={styles.text}></Text>
        <Text style={styles.author}></Text>
        <Text style={styles.author}></Text>
        <Image style={styles.image2} src="assets_general/img/esquema.png"
        />
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
    </Document>
    </>
  )
}


export default Certificado;