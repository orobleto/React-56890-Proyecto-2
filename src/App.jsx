import React from "react";
import Tabla from "./Componentes/Tabla";
import Usuario from "./Componentes/Usuario";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            error: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').
            then((response) => response.json()).
            then((JSON) => this.setState({ usuarios: JSON })).catch((e) => this.setState({ error: true }));
    }
    render() {
        return (<div>
            {!this.state.error ? "" :
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> No se cargaron correctamente los usuarios
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

            }

            <Tabla />
            <br />
            <br />
            <br />
            <br />
            <br />
            {this.state.usuarios.map((e) =>
                <Usuario
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    username={e.username}
                    email={e.email}
                />
            )}
        </div>);
    };

}