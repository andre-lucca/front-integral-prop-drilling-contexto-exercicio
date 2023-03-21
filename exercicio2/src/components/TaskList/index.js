import { useContext } from 'react'
import { TaskListContext } from '../../contexts/TaskListContext'
import { TrashSimple } from 'phosphor-react'

import './styles.css'

export function TaskList() {
  const [taskList, setTaskList] = useContext(TaskListContext)

  const handleDeleteButtonClick = (taskIndex) => {
    const newTaskList = taskList.filter((task, index) => index !== taskIndex)
    setTaskList(newTaskList)
  }

  return (
    <ul className="task-list">
      {
        taskList.map((task, index) => (
          <li
            key={index}
            className="task-item"
          >
            {task}
            <div
              className="trash-container"
              title="Excluir tarefa"
              onClick={() => handleDeleteButtonClick(index)}
            >
              <TrashSimple />
            </div>
          </li>
        ))
      }
    </ul>
  )
}