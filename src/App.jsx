import './App.css';
import { React, useState } from 'react';
import TodoBoard from './component/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    console.log("나는 여기있다아아아아아아", inputValue)
    setTodoList([...todoList, inputValue])
  }

  return (
    <main>
      <input value = {inputValue}type="text" onChange=
      {(event) => setInputValue(event.target.value)}/>
      <button className='addButton' onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
