// importamos libreria
import React from 'react';

// Creamos función TodoItem
function TodoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

// Exportamos modulo
export { TodoItem };