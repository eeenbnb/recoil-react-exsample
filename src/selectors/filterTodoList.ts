import { atom, selector } from "recoil";
import { todoListState } from '../atoms/todoLists'
import { todos } from '../@types/todo';

export const todoListFilterState = atom<'Show All' | 'Show Completed' | 'Show Uncompleted'>({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListState = selector<todos>({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
