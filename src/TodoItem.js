// importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoItem.css';

// Creamos función TodoItem
function TodoItem(props) {
    // Función que determina tareas completadas
    const onComplete = () => {
        alert('Ya completaste el todo ' + props.text);
    };

    // Función que determina tareas incompletas
    const onDelete = () => {
        alert('Borraste el todo ' + props.text);
    };

    return (
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >X</span>
        </li>
    );
}

// Exportamos modulo
export { TodoItem };