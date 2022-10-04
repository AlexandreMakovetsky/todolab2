import { useState, useReducer } from "react";
import appReducer from "./reducers";
import UserBar from "./user/UserBar";
import Todo from "./todo/Todo";
import Todolist from "./todo/Todolist";

function App() {
    const todoInit = [];
  
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todo: todoInit
  });

  
  
  
  return (
    <div>
    <UserBar user={state.user} dispatch={dispatch} />
    {state.user && (
      <Todo user={state.user} todo={state.todo} dispatch={dispatch} />
    )}
    <Todolist todo={state.todo}/>
  </div>
  );
}

export default App;
