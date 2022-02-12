import React from "react";
import { FancyGridReact } from 'fancygrid-react'


export default class Tabla2 extends React.Component {

    render() {
        return <FancyGridReact config={
            {
                title: "CRUD",
                width: "600",
                height: "400",
                paging: true,
                tbar: [
                    {
                        type: "button",
                        text: "Agregar",
                        action: "add"
                    },
                    {
                        type: "button",
                        text: "Borrar",
                        action: "remove"
                    },


                ],
                defaults: {
                    editable: true,
                    sortable: true,
                    resizable: true
                },
                columns:
                    [
                        {
                            index: "id",
                            title: "ID",
                            width: 50,
                            editable: false

                        },
                        {
                            index: "name",
                            title: "Nombre"
                        },
                        {
                            index: "email",
                            title: "Correo",
                            width: 250,
                        },
                        {
                            type:"action",
                            items:[{
                                text:"Borrar",
                                cls:"action-column-remove",
                                action:"remove"
                            }]
                        }

                    ],
                data: {
                    proxy: {
                        type:"rest",
                        url: "https://jsonplaceholder.typicode.com/users"

                        /*
                        api: {
                            create: "https://jsonplaceholder.typicode.com/users",
                            read: "https://jsonplaceholder.typicode.com/users",
                            update: "https://jsonplaceholder.typicode.com/users",
                            destroy: "https://jsonplaceholder.typicode.com/users"
                        }*/
                    }
                }

            }
        } />
    }
}