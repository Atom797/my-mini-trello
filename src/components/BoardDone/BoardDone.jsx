import { useEffect, useState } from 'react'
import style from './BoardDone.module.css'


const BoardDone = (props) => {

    const setStatusForTask = (e, id) => {
        let idCurrentTask = props.arrTextTasks.findIndex(el => el.id === id)
        let copyArrTextTasks = props.arrTextTasks;
        copyArrTextTasks[idCurrentTask].statusTask = e.target.value
        props.setArrTextTasks([...copyArrTextTasks])
    }

    const [arrTasks, setArrTask] = useState();

    useEffect(()=>{
        console.log(props.arrTextTasks)
        let arrInProgressTasks = props.arrTextTasks.filter(el => el.statusTask === 'done')
        let arrTasks = arrInProgressTasks.map(task =>
            <div key={task.id} className={style.itemList}>
                <select name="select" className={style.selectItemList} onChange={e => setStatusForTask(e, task.id)} defaultValue="done">
                    <option disabled value="done">Done</option>
                    <option value="toDo">ToDo</option>
                    <option value="inProgress">In progress</option>
                </select>
                {task.newTask}
            </div>
        )
        setArrTask(arrTasks);
    }, [props.arrTextTasks])

    

    return (
        <div className={style.content}>
            <div className={style.header}>
                Done
            </div>
            <div className={style.list}>
                {arrTasks}
            </div>
        </div>
    )
}

export default BoardDone;