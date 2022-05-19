// Importamos libreria
import React from 'react';

// Importamos libreria CSS
import './TodoSearch.css';

// Creamos función TodoSearch
function TodoSearch() {
    // Inicializamos estado de React | Funciona por medio de funciones
    const [searchValue, setSearchValue] = React.useState('');

    // Inicializamos función onSearchValueChange - con evento
    const onSearchValueChange = (event) => {
        console.log(event.target.value);

        // Enviamos argumento digitado en el Input hacía la función setSearchValue
        setSearchValue(event.target.value);
    };

    // Retornamos función
    return [
        <input 
            className='TodoSearch' 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}

// Exportamos modulo
export { TodoSearch };