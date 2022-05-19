// Importamos libreria
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AppUI } from './AppUI';

// Inicializamos variable constante todos
const defaultTodos = [
  {
    text: 'Cortar Cebolla', 
    completed: false
  },{
    text: 'Tomar el curso de ReactJS', 
    completed: true
  },{
    text: 'Llorar', 
    completed: false
  },{
    text: 'Pruebas', 
    completed: false
  },
];

function App() {
  // Inicializamos Array's todos
  const [todos, setTodos] = React.useState(defaultTodos);

  // Inicializamos estado de React | Funciona por medio de funciones
  const [searchValue, setSearchValue] = React.useState('');

  // Validamos cuantos todos estan completos - 2 opciones - Validamos todos que posición completed sean TRUE
  // const completedTodos = todos.filter(todo => todo.completed == true);
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  // Validamos Todos Incompletos
  const deletedTodos = todos.filter(todo => !todo.completed).length;

  // Contar la longitud total de los todos
  const totalTodos = todos.length;

  // Inicializamos var
  let searchedTodos = [];

  // Verificamos si existe algun filtro de busqueda
  if(!searchValue.length >= 1) {
    // Cuando no existe un filtro de busqueda
    searchedTodos = todos;
  } else {
    // Cuando existe un filtro de busqueda

    // Iteramos todos los todos existentes
    searchedTodos = todos.filter(todo => {
      // Convertimos todos los textos de los todos a minusculas
      const todoText = todo.text.toLowerCase();

      // Convertimos a minusculas el texto a buscar
      const searchText = searchValue.toLowerCase();

      // Validamos si lo que digitan en el input de buscar, coincide con algún todo
      return todoText.includes(searchText);
    });
  }

  // Marcar TODO's Completado
  const completeTodo = (text) => {
    // Iteramos los TODOS, buscando con cual coincide el texto del click
    const todoIndex = todos.findIndex(todo => todo.text == text);

    // Creamos array "newTodos" como copia del anterior TODO en array "todos"
    const newTodos = [...todos];

    // Forma 2 de actualizar los TODO's
    newTodos[todoIndex].completed = true;

    // Sincronizamos la nueva lista con los cambios realizados
    setTodos(newTodos);
  };

  // Marcar TODO's eliminados
  const deleteTodo = (text) => {
    // Iteramos los TODOS, buscando con cual coincide el texto del click
    const todoIndex = todos.findIndex(todo => todo.text == text);

    // Creamos array "newTodos" como copia del anterior TODO en array "todos"
    const newTodos = [...todos];

    // Eliminamos el todo
    newTodos.splice(todoIndex, 1);

    // Sincronizamos la nueva lista con los cambios realizados
    setTodos(newTodos);
  };

  // Retornamos
  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
