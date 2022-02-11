import React from "react";
import { FancyGridReact } from 'fancygrid-react'

const columnas = [
    {
        index: "id",
        title: "ID",
    },
    {
        index: "nombre",
        title: "Nombre",
    },
    {
        index: "edad",
        title: "Edad",
    },

];
const datos = [
    {
        id: 1,
        nombre: "Octavio",
        edad: 38
    },
    {
        id: 2,
        nombre: "Mariana",
        edad: 32
    },
    {
        id: 1,
        nombre: "Pedro",
        edad: 35
    },

];

export default class Tabla2 extends React.Component {

    render() {
        return <FancyGridReact config={
            {
                columns: columnas,
                data: datos,
                height: 400,
                width: 500
            }
        } />
    }
}