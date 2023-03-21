import { useState } from "react"
import { TaskList } from "../TaskList"
import { TaskListContext } from "../../contexts/TaskListContext"
import { TaskRegistration } from "../TaskRegistration"
import "./styles.css"

export function ToDoList() {
  const [taskList, setTaskList] = useState([])

  return (
    <div className="container-to-do">
      <h1>To do list</h1>
      <TaskListContext.Provider value={[taskList, setTaskList]}>
        <TaskRegistration />
        <TaskList />
      </TaskListContext.Provider>
    </div>
  )
}