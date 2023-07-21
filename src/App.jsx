import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import ListTasks from './components/ListTasks'
import {Toaster}  from 'react-hot-toast';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  const [tasks, setTasks] = useState([])

  console.log ("tasks", tasks);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      // Handle the error, show a message, or take appropriate action.
    }
  }, []);
  
  

  return(<>
  <DndProvider backend={HTML5Backend}>
  <Toaster/>
    <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTasks tasks={tasks} setTasks={setTasks}/>
    </div> 
  </DndProvider>
  </>);

}

export default App;
