// Importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoSearch.css';

// Creamos función TodoSearch || Recibe los argumentos desde App.js
function TodoSearch({ searchValue, setSearchValue }) {
    // Inicializamos función onSearchValueChange - con evento
    const onSearchValueChange = (event) => {
        console.log(event.target.value);

        // Enviamos argumento digitado en el Input hacía la función setSearchValue
        setSearchValue(event.target.value);
    };

    // Retornamos función
    return (
        <input 
            className='TodoSearch' 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

// Exportamos modulo
export { TodoSearch };