import style from './TaskWindow.module.css'
import closeButton from '../../assets/images/close.svg'
import { useEffect, useState } from 'react'
import plusImg from '../../assets/images/plus.svg'

const TaskWindow = (props) => {

    const [visibleWindowForDescription, setVisibleWindowForDescription] = useState(false);

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button className={style.buttonClose} onClick={() => { props.setActive(false) }}>
                    <img className={style.imgClose} src={closeButton} />
                </button>
                <div className={style.nameTask}>
                    {props.currentObjTask.newTask}
                </div>
                <div className={style.description}>
                    Описание задачи:
                </div>
                <div className={style.addDescription}>
                    Добавить описание задачи
                    <button className={style.plusButton} onClick={() => visibleWindowForDescription ? setVisibleWindowForDescription(false) : setVisibleWindowForDescription(true)}>
                        <img className={style.plusImg} src={plusImg} />
                    </button>
                </div>
            </div>

        </div>
    )
}


export default TaskWindow;