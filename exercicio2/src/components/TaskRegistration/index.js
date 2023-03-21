import { useContext, useState } from "react"
import { TaskListContext } from "../../contexts/TaskListContext"

import "./styles.css"

export function TaskRegistration() {
  const [taskList, setTaskList] = useContext(TaskListContext)
  const [taskInputValue, setTaskInputValue] = useState('')

  const handleAddTask = (event) => {
    if (!taskInputValue) {
      return
    }

    setTaskList([...taskList, taskInputValue])
    setTaskInputValue('')
  }

  return (
    <div className="task-registration">
      <input
        id="task-input"
        name="taskInput"
        type="text"
        placeholder="Nova tarefa..."
        onChange={(event) => setTaskInputValue(event.target.value)}
        value={taskInputValue}
      />
      <button
        onClick={handleAddTask}
      >
        Adicionar tarefa
      </button>
    </div>
  )
}