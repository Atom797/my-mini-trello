import style from './MainBoard.module.css';
import TaskWindow from '../TaskWindow/TaskWindow';
import { useState, useEffect } from 'react'


const MainBoard = (props) => {

  const [arrTasks, setArrTask] = useState();

  useEffect(() => {
    console.log(props.arrTextTasks)
    let arrNecessaryTasks = props.arrTextTasks.filter(el => el.statusTask === props.status)
    let arrTasks = arrNecessaryTasks.map(task =>
      <div key={task.id} className={style.itemList}>
        <select name="select" className={style.selectItemList} onChange={e => props.setStatusForTask(e, task.id)} >
          <option>Change status</option>
          <option value="ToDo">ToDo</option>
          <option value="In Progress">In progress</option>
          <option value="Done">Done</option>
        </select>
        <div className={style.basicBodyTask} onClick={() => { props.setTaskWindow(task.id) }}>
          {task.newTask}
        </div>
      </div>
    )
    setArrTask(arrTasks);
  }, [props.arrTextTasks])



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
          arrTextTasks={props.arrTextTasks} />}
    </div>
  )
}

export default MainBoard;