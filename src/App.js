
//**Para Comentar/Descomentar rapido en VS Code: Ctrl + k + c
import React from 'react';
// import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso de intro de reactjs', completed: false},
  {text: 'Pasear al perro', completed: true},
  {text: 'Pasear al gato', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; //!!Atajo de doble simbolo de admiracion como TRUE
  const totalTodos = todos.length;

  //Filter para TODOs de una forma
  // let searchedTodos = [];

  // if (!searchValue.length >= 1) {
  //   searchedTodos = todos;
  // } else {
  //     searchedTodos = todos.filter(todo => {
  //       const todoText = todo.text.toLowerCase();
  //       const searchText = searchValue.toLowerCase();
  //       return todoText.includes(searchText);
  //   });
  // };
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].completed,
    //   completed: true,
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  //Componentes de React
  return (
    <>
      <TodoCounter  
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))} */}
        {/*Filtro para un buscador, de forma sencilla y rapida */}
         {todos.filter(to => to.text.toLowerCase().includes(searchValue.toLowerCase()))
          .map((todo) => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <TodoCreateButton />
    </>
  );
}

export default App;
