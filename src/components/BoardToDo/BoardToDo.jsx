import style from './BoardToDo.module.css'
import plusImg from '../../assets/images/plus.svg'
import { useState } from 'react'
import TaskWindow from '../TaskWindow/TaskWindow';


const BoardToDo = (props) => {

    const [newTask, setNewTask] = useState();
    const [visibleWindowForNewTasks, setVisibleWindowForNewTasks] = useState(false);

    const guidGenerator = () => {
        let S = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        return (S() + S() + "-" + S() + "-" + S() + "-" + S() + "-" + S() + S() + S());
    }

    return (
        <div className={style.content}>
            <div className={style.header}>
                {props.status}
                <button className={style.plusButton} onClick={() => visibleWindowForNewTasks ? setVisibleWindowForNewTasks(false) : setVisibleWindowForNewTasks(true)}>
                    <img className={style.plusImg} src={plusImg} />
                </button>
            </div>
            <div className={style.list}>
                <div className={style.windowForNewTask} style={{ display: visibleWindowForNewTasks ? "grid" : "none" }}>
                    <textarea className={style.textareaForAddTask} placeholder="Введите название задачи" value={newTask} onChange={e => setNewTask(e.target.value)} />
                    <button className={style.buttonForAddTask}
                        onClick={() => newTask && props.setArrTextTasks([...props.arrTextTasks, { id: guidGenerator(), newTask, statusTask: "ToDo" }])}>
                        Добавить новую задачу
                    </button>
                </div>
                {props.arrTasks}
            </div>
            {props.taskWindowActive && <TaskWindow setActive={props.setTaskWindowActive} currentObjTask={props.currentObjTask} arrTextTasks={props.arrTextTasks} />}

        </div>
    )
}


export default BoardToDo;