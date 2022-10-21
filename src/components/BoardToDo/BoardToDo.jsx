import style from './BoardToDo.module.css'
import plusImg from '../../assets/images/plus.svg'
import { useState, useEffect } from 'react'
import TaskWindow from '../TaskWindow/TaskWindow';


const BoardToDo = (props) => {

    const [arrTasks, setArrTask] = useState();

    const [newTask, setNewTask] = useState();
    const [visibleWindowForNewTasks, setVisibleWindowForNewTasks] = useState(false);

    const guidGenerator = () => {
        let S = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        return (S() + S() + "-" + S() + "-" + S() + "-" + S() + "-" + S() + S() + S());
    }

    useEffect(() => {
        let arrToDoTasks = props.arrTextTasks.filter(el => el.statusTask === 'toDo')
        let arrTasks = arrToDoTasks.map(task =>
            <div key={task.id} className={style.itemList} >
                <select name="select" className={style.selectItemList} onChange={e => props.setStatusForTask(e, task.id)} defaultValue="toDo">
                    <option value="toDo" disabled>ToDo</option>
                    <option value="inProgress">In progress</option>
                    <option value="done">Done</option>
                </select>
                <div className={style.basicBodyTask} onClick={() => { props.setTaskWindow(task.id) }}>
                    <p>{task.newTask}</p>
                </div>
                
            </div>
        )
        setArrTask(arrTasks);
    }, [props.arrTextTasks])

    return (
        <div className={style.content}>
            <div className={style.header}>
                ToDo
                <button className={style.plusButton} onClick={() => visibleWindowForNewTasks ? setVisibleWindowForNewTasks(false) : setVisibleWindowForNewTasks(true)}>
                    <img className={style.plusImg} src={plusImg} />
                </button>
            </div>
            <div className={style.list}>
                <div className={style.windowForNewTask} style={{ display: visibleWindowForNewTasks ? "grid" : "none" }}>
                    <textarea className={style.textareaForAddTask} placeholder="Введите название задачи" value={newTask} onChange={e => setNewTask(e.target.value)} />
                    <button className={style.buttonForAddTask}
                        onClick={() => newTask && props.setArrTextTasks([...props.arrTextTasks, { id: guidGenerator(), newTask, statusTask: "toDo" }])}>
                        Добавить новую задачу
                    </button>
                </div>
                {arrTasks}
            </div>
            {props.taskWindowActive && <TaskWindow setActive={props.setTaskWindowActive} currentObjTask={props.currentObjTask} arrTextTasks={props.arrTextTasks}/>}

        </div>
    )
}


export default BoardToDo;