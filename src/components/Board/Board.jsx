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

    useEffect(() =>{
        localStorage.arrTasks = JSON.stringify(arrTextTasks);
    }, [arrTextTasks])

    return(
        <div className={style.content}>
            <BoardToDo arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}/>
            <BoardInProgress arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}/>
            <BoardDone arrTextTasks={arrTextTasks} setArrTextTasks={setArrTextTasks}/>
        </div>
    )
}

export default Board;