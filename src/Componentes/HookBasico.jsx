import React, { useState, useEffect } from "react";
import Usuario from "./Usuario";

// cambiar el estado de json place holder
function HookBasico(props) {

    const [users, setUsers] = useState([]);
    const [contador, setContador] = useState(0);

    useEffect(() => {
        BuscarUsuarios();
    }  ,[]   );

    const BuscarUsuarios = () => {
        fetch('https://jsonplaceholder.typicode.com/users').
            then((response) => response.json()).then((datos) => {
                setUsers(datos);
                setContador(contador + 1);
                console.log(datos);
            });
    }

    return (
        <div>
            <h1>{contador}</h1>
            <br />
            {
                users.map((e) =>
                    <Usuario key={e.id} id={e.id} name={e.name} username={e.username} email={e.email} />
                )

            }

        </div>
    );
}

export default HookBasico;