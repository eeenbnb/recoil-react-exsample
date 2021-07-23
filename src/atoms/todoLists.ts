import { todos } from '../@types/todo';
import { atom } from 'recoil';

export const todoListState = atom<todos>({
  key: 'todoListState',
  default: [],
});
