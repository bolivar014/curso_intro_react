// importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoItem.css';

// Creamos función TodoItem
function TodoItem(props) {
    // Retornamos
    return (
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >X</span>
        </li>
    );
}

// Exportamos modulo
export { TodoItem };