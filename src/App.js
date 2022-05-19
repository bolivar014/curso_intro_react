// Importamos libreria
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

// Inicializamos variable constante todos
const todos = [
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
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
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
