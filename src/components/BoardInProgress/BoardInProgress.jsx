import { useEffect, useState } from 'react'
import style from './BoardInProgress.module.css'


const BoardInProgress = (props) => {

    const setStatusForTask = (e, id) => {
        let idCurrentTask = props.arrTextTasks.findIndex(el => el.id === id)
        let copyArrTextTasks = props.arrTextTasks;
        copyArrTextTasks[idCurrentTask].statusTask = e.target.value
        props.setArrTextTasks([...copyArrTextTasks])
    }

    const [arrTasks, setArrTask] = useState();

    useEffect(()=>{
        console.log(props.arrTextTasks)
        let arrInProgressTasks = props.arrTextTasks.filter(el => el.statusTask === 'inProgress')
        let arrTasks = arrInProgressTasks.map(task =>
            <div key={task.id} className={style.itemList}>
                <select name="select" className={style.selectItemList} onChange={e => setStatusForTask(e, task.id)} defaultValue="inProgress">
                    <option value="inProgress" disabled>In progress</option>
                    <option value="toDo">ToDo</option>
                    <option value="done">Done</option>
                </select>
                {task.newTask}
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
        </div>
    )
}

export default BoardInProgress;