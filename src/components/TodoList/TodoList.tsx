import React from 'react';
import './TodoList.css';

import { todoListState } from '../../atoms/todoLists'
import { useRecoilValue } from 'recoil';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="TodoList">
      {
        todoList.map((v,i) => {
          return (
            <div key={i}>
              <p>{v.id}</p>
              <p>{v.text}</p>
              <p>{v.isComplete ? "yes":"no"}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default TodoList;
