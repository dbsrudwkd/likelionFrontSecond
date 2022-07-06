import './App.css';
import { React, useState } from 'react';
import TodoBoard from './component/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }

  return (
    <main>
      <input className='title' value = {inputValue} type="text" onChange=
      {(event) => setInputValue(event.target.value)}/>
      <br/>
      <textarea className='content'></textarea>
      <button className='addButton' onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
