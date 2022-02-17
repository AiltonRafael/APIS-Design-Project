import { useState } from "react";
import TodoList from "./components/TodoList";
import { UserContext } from './context/userContext';
import tasks from './utils/tasks.json';

function App() {

  const [ tasksList, setTaskList ] = useState(tasks)

  return ( 
      <div>
        <UserContext.Provider value={{tasksList, setTaskList}}>
          <TodoList setState={setTaskList}/>
          </UserContext.Provider>
      </div>
  );
}

export default App;
