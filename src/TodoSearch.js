// Importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoSearch.css';

// Creamos función TodoSearch
function TodoSearch() {
    // Inicializamos función onSearchValueChange - con evento
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    // Retornamos función
    return (
        <input 
            className='TodoSearch' 
            placeholder="Cebolla"
            onChange={onSearchValueChange}
        />
      
    );
}

// Exportamos modulo
export { TodoSearch };