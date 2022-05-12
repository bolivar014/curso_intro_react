// Importamos libreria
import React from 'react';

// Creamos función TodoList
function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

// Exportamos modulo
export {TodoList};