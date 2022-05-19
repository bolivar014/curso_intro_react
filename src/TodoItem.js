// importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoItem.css';

// Creamos función TodoItem
function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">X</span>
        </li>
    );
}

// Exportamos modulo
export { TodoItem };