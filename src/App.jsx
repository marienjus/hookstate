
import {createState, useState as useStateHook} from '@hookstate/core'
import TodoList from './components/TodoList.jsx'

import './App.css'

const appGlobalState = createState(0)

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <h4 style={{fontSize: '1.4rem', color:'#fff'}}>{appGlobalState.get()}</h4>
      <TodoList />
    </div>
  )
}

export default App