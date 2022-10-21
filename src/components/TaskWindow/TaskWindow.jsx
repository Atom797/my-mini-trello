import style from './TaskWindow.module.css'
import closeButton from '../../assets/images/close.svg'
import { useEffect, useState } from 'react'

const TaskWindow = (props) => {

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button className={style.buttonClose} onClick={() => { props.setActive(false) }}>
                    <img className={style.imgClose} src={closeButton} />
                </button>
            </div>
            <div className={style.nameTask}>
                {props.currentObjTask.newTask}
            </div>
            <div>
                Описание задачи
            </div>
        </div>
    )
}


export default TaskWindow;