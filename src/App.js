
//**Para Comentar/Descomentar rapido en VS Code: Ctrl + k + c
import React from 'react';
// import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const todos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso de intro de reactjs', completed: false},
  {text: 'Pasear al perro', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter  />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>
      <TodoCreateButton />
    </>
  );
}

export default App;
