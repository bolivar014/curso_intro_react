// Importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoCounter.css';

// Creamos función TodoCounter || Recibimos argumentos desde App.js
function TodoCounter({ total, completed }) {
    
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} TODO's</h2>

    );
}

// Exportamos modulo
export { TodoCounter };