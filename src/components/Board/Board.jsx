import BoardToDo from '../BoardToDo/BoardToDo';
import style from './Board.module.css'
import { useEffect, useState } from 'react'
import BoardInProgress from '../BoardInProgress/BoardInProgress';
import BoardDone from '../BoardDone/BoardDone';


const Board = () => {

    let arrTask = [];

    if(localStorage.arrTasks){
        arrTask = JSON.parse(localStorage.arrTasks)
    }

    const [arrTextTasks, setArrTextTasks] = useState(arrTask || []);

    const [taskWindowActive, setTaskWindowActive] = useState(false);
    const [currentObjTask, setCurrentObjTask] = useState({});

    useEffect(() =>{
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

    return(
        <div className={style.content}>
            <BoardToDo 
                arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks} 
                taskWindowActive={taskWindowActive} setTaskWindowActive={setTaskWindowActive} 
                currentObjTask={currentObjTask} setStatusForTask={setStatusForTask} 
                setTaskWindow={setTaskWindow}/>
            <BoardInProgress 
                arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}
                taskWindowActive={taskWindowActive} setTaskWindowActive={setTaskWindowActive} 
                currentObjTask={currentObjTask} setStatusForTask={setStatusForTask} 
                setTaskWindow={setTaskWindow}/>
            <BoardDone 
                arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}
                taskWindowActive={taskWindowActive} setTaskWindowActive={setTaskWindowActive} 
                currentObjTask={currentObjTask} setStatusForTask={setStatusForTask} 
                setTaskWindow={setTaskWindow}/>
        </div>
    )
}

export default Board;