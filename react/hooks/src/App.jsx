import React, { createContext } from 'react';
import State from './components/State';
import Effect from './components/Effect';
import MyHooks from './components/MyHooks';
import State2 from './components/State2';
import Ref from './components/Ref';
import Context from './components/Context';
import Con from './_context.js'
import { Button } from 'antd'
import TodoList from './todo/TodoList.jsx';

// const Con = createContext()

const App = () => {
  return (
    <div>
      {/* hello world */}
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <MyHooks /> */}
      {/* <State2 num={10}/> */}
      {/* <Ref /> */}
      {/* <Con.Provider value={'来自app的数据'}>
        <div>
          <Context />
        </div>
      </Con.Provider> */}

      {/* <Button>Default</Button> */}

      <TodoList />
    </div>
  );
};

export default App;