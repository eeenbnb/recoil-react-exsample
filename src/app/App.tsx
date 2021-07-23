import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';

import TodoList from '../components/TodoList/TodoList'
import TodoListCreator from '../components/TodoListCreator/TodoListCreator'
import TodoListFilter from '../components/TodoListFilter/TodoListFilter'
import WaitView from '../components/WaitView/WaitView'

function App() {
  return (
    <RecoilRoot>
      <TodoList/>
      <TodoListCreator/>

      <TodoListFilter/>
      
      <React.Suspense fallback={<div>Loading...</div>}>
        <WaitView/>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
