import style from './SpaceForBoards.module.css'
import { useEffect, useState } from 'react'
import MainBoard from '../MainBoard/MainBoard';

const Board = () => {

    let arrTask = [];

    if (localStorage.arrTasks) {
        arrTask = JSON.parse(localStorage.arrTasks)
    }

    const [arrTextTasks, setArrTextTasks] = useState(arrTask || []);

    const [taskWindowActive, setTaskWindowActive] = useState(false);
    const [currentObjTask, setCurrentObjTask] = useState({});

    useEffect(() => {
        localStorage.arrTasks = JSON.stringify(arrTextTasks);
    }, [arrTextTasks])

    const findCurrentTask = (id) => {
        let idCurrentTask = arrTextTasks.findIndex(el => el.id === id)
        let copyArrTextTasks = arrTextTasks;
        return [copyArrTextTasks, idCurrentTask];
    }


    const setStatusForTask = (e, id) => {
        let [copyArrTextTasks, idCurrentTask] = findCurrentTask(id);
        copyArrTextTasks[idCurrentTask].statusTask = e.target.value;
        setArrTextTasks([...copyArrTextTasks]);
    }

    const setTaskWindow = (id) => {
        let [copyArrTextTasks, idCurrentTask] = findCurrentTask(id);
        setCurrentObjTask(copyArrTextTasks[idCurrentTask]);
        setTaskWindowActive(true);
    }

    return (
        <div className={style.content}>
            <MainBoard status="ToDo"
                arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}
                taskWindowActive={taskWindowActive} setTaskWindowActive={setTaskWindowActive}
                currentObjTask={currentObjTask} setStatusForTask={setStatusForTask}
                setTaskWindow={setTaskWindow} />
            <MainBoard status="In Progress"
                arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}
                taskWindowActive={taskWindowActive} setTaskWindowActive={setTaskWindowActive}
                currentObjTask={currentObjTask} setStatusForTask={setStatusForTask}
                setTaskWindow={setTaskWindow} />
            <MainBoard status="Done"
                arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}
                taskWindowActive={taskWindowActive} setTaskWindowActive={setTaskWindowActive}
                currentObjTask={currentObjTask} setStatusForTask={setStatusForTask}
                setTaskWindow={setTaskWindow} />
        </div>
    )
}

export default Board;