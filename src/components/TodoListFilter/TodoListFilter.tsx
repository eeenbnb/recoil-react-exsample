import React from 'react';
import { todoListFilterState, filteredTodoListState } from '../../selectors/filterTodoList'
import { useRecoilValue, useRecoilState } from 'recoil';
import './TodoListFilter.css';

const TodoListFilter = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const [filterValue, setFilter] = useRecoilState(todoListFilterState);

  setFilter("Show Completed");

  return (
    <div className="TodoList">
      <p>filterValue:{filterValue}</p>
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
  )
};

export default TodoListFilter;
