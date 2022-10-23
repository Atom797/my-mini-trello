import style from './TaskWindow.module.css'
import closeButton from '../../assets/images/close.svg'
import { useEffect, useState } from 'react'
import plusImg from '../../assets/images/plus.svg'
import { Route, Routes, useNavigate } from 'react-router-dom';

const TaskWindow = (props) => {

    const [visibleWindowForDescription, setVisibleWindowForDescription] = useState(false);
    const [description, setDescription] = useState();
    let navigate = useNavigate();

    const setDescriptionForTask = () => {
        let idCurrentTask = props.arrTextTasks.findIndex(el => el.id === props.currentObjTask.id)
        let copyArrTextTasks = props.arrTextTasks;
        copyArrTextTasks[idCurrentTask].description = description;
        props.setArrTextTasks([...copyArrTextTasks]);
    }

    return (
        <Routes>
            <Route path="/task/:id" element={
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <button className={style.buttonClose} onClick={() => { props.setActive(false); navigate(-1) }}>
                            <img className={style.imgClose} src={closeButton} />
                        </button>
                        <div className={style.nameTask}>
                            {props.currentObjTask.newTask}
                        </div>
                        {props.currentObjTask.description ?
                            <div className={style.description}>
                                Описание задачи: {props.currentObjTask.description}
                            </div> :
                            <>
                                <div className={style.addDescription}>
                                    Добавить описание задачи
                                    <button className={style.plusButton} onClick={() => visibleWindowForDescription ? setVisibleWindowForDescription(false) : setVisibleWindowForDescription(true)}>
                                        <img className={style.plusImg} src={plusImg} />
                                    </button>
                                </div>
                                {visibleWindowForDescription &&
                                    <div className={style.windowForAddDescription}>
                                        <textarea className={style.textareaForAddDescription} placeholder="Введите описание задачи" value={description} onChange={e => setDescription(e.target.value)} />
                                        <button className={style.buttonForAddDescription} onClick={() => { setDescriptionForTask() }}>
                                            Добавить описание
                                        </button>
                                    </div>
                                }
                            </>
                        }
                    </div>

                </div>
            } />
        </Routes >

    )
}


export default TaskWindow;