import style from './MainBoard.module.css';
import TaskWindow from '../TaskWindow/TaskWindow';
import { useState, useEffect } from 'react'
import BoardToDo from '../BoardToDo/BoardToDo';
import { NavLink } from 'react-router-dom';


const MainBoard = (props) => {

  const [arrTasks, setArrTask] = useState();

  useEffect(() => {
    let arrNecessaryTasks = props.arrTextTasks.filter(el => el.statusTask === props.status)
    let arrTasks = arrNecessaryTasks.map(task =>
      <div key={task.id} className={style.itemList}>
        <select name="select" className={style.selectItemList} onChange={e => props.setStatusForTask(e, task.id)}>
          <option>Change status</option>
          {!(props.status === "ToDo") && <option value="ToDo">ToDo</option>}
          {!(props.status === "In Progress") && <option value="In Progress">In progress</option>}
          {!(props.status === "Done") && <option value="Done">Done</option>}
        </select>
        <NavLink to={'/task/' + task.id} className={style.basicBodyTask} onClick={() => { props.setTaskWindow(task.id) }}>
          <div className={style.nameTask}>{task.newTask}</div>
        </NavLink>
      </div >
    )
    setArrTask(arrTasks);
  }, [props.arrTextTasks, props.currentObjTask])

  if (props.status === "ToDo") {
    return (
      <BoardToDo
        arrTasks={arrTasks} status={props.status}
        arrTextTasks={props.arrTextTasks} setArrTextTasks={props.setArrTextTasks}
        setActive={props.setTaskWindowActive} currentObjTask={props.currentObjTask} />
    )
  }

  return (
    <div className={style.content}>
      <div className={style.header}>
        {props.status}
      </div>
      <div className={style.list}>
        {arrTasks}
      </div>
      {props.taskWindowActive &&
        <TaskWindow
          setActive={props.setTaskWindowActive}
          currentObjTask={props.currentObjTask}
          arrTextTasks={props.arrTextTasks}
          setArrTextTasks={props.setArrTextTasks} />
      }
    </div>
  )
}

export default MainBoard;