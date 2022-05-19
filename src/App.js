// Importamos libreria
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

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

  // Retornamos
  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
    
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
