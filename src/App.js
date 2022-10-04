import { useState, useReducer } from "react";
import appReducer from "./reducers";
import UserBar from "./user/UserBar";

function App() {
  
  
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
  });

  
  
  
  return (
    <div className="App">
      <UserBar user={state.user} dispatch={dispatch} />
    </div>
  );
}

export default App;
