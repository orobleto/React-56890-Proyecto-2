import React, { Component } from "react";
import DataTable from 'react-data-table-component'


const columnas = [
    {
        name: "Usuario ID",
        selector: "userId",
        sortable: true,
        right: true
    },
    {
        name: "ID",
        selector: "id",
        sortable: true
    },
    {
        name: "Titulo",
        selector: "title",
        sortable: true,
        grow: 5
    },

]

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnas: columnas,
            datos: [],
            filtro: "",
            datosFiltrados: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/').
            then((response) => response.json()).
            then((JSON) => this.setState({ datos: JSON, datosFiltrados: JSON })).catch((e) => this.setState({ error: true }));
    }


    Filtrar = async (e) => {
        e.persist();
        await this.setState({ filtro: e.target.value });
        this.BuscarDatos();
    }

    BuscarDatos = () => {
        this.setState({
            datosFiltrados: this.state.datos.filter((e) => e.title.includes(this.state.filtro) || e.id.toString().includes(this.state.filtro))

        });
    }

    render() {
        return (
            <div>

                <input
                    type="text"
                    placeholder="Filtrar"
                    name="filtro"
                    value={this.state.filtro}
                    onChange={this.Filtrar}

                />



                <DataTable
                    columns={this.state.columnas}
                    data={this.state.datosFiltrados}
                    fixedHeader
                    fixedHeaderScrollHeight="400px"
                    pagination
                    paginationComponentOptions={
                        {
                            rowsPerPageText: "Filas por pagina",
                            selectAllRowsItem: true,
                            selectAllRowsItemText: "Todos",
                            rangeSeparatorText: "de"
                        }
                    }
                    noDataComponent={

                       <span><strong>Advertencia!</strong> No existen datos</span> 

                    }
                />

            </div>

        );
    }

}


export default Tabla;
