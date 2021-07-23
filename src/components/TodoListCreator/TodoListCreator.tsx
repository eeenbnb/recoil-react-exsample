import { useState, ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from '../../atoms/todoLists'
import './TodoListCreator.css';

const TodoListCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: id % 2 == 0
      },
    ]);
    setInputValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoListCreator;

let id = 0;
function getId() {
  return id++;
}
