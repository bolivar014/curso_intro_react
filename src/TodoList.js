// Importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoList.css';

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