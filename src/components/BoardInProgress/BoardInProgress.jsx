import { useEffect, useState } from 'react'
import style from './BoardInProgress.module.css'
import TaskWindow from '../TaskWindow/TaskWindow';


const BoardInProgress = (props) => {

    const [arrTasks, setArrTask] = useState();

    useEffect(() => {
        console.log(props.arrTextTasks)
        let arrInProgressTasks = props.arrTextTasks.filter(el => el.statusTask === 'inProgress')
        let arrTasks = arrInProgressTasks.map(task =>
            <div key={task.id} className={style.itemList}>
                <select name="select" className={style.selectItemList} onChange={e => props.setStatusForTask(e, task.id)} >
                    <option>Change status</option>
                    <option value="inProgress">In progress</option>
                    <option value="toDo">ToDo</option>
                    <option value="done">Done</option>
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
                In progress
            </div>
            <div className={style.list}>
                {arrTasks}
            </div>
            {props.taskWindowActive && <TaskWindow setActive={props.setTaskWindowActive} currentObjTask={props.currentObjTask} arrTextTasks={props.arrTextTasks} />}
        </div>
    )
}

export default BoardInProgress;