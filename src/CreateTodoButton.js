// Importamos libreria
import React from 'react';

// Importamos libreria de CSS
import './CreateTodoButton.css';

// Creamos función CreateTodoButton
function CreateTodoButton() {
    // Creamos función constante para evento de click
    const onClickButton = (msg) => {
        alert(msg);
    }

    // Retornamos función
    return (
        <button 
            className='CreateTodoButton'
            onClick={() => onClickButton('recibio click!')}
        >
            +
        </button>
    );
}

// Exportamos modulo
export { CreateTodoButton };