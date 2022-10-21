import style from './TaskWindow.module.css'
import closeButton from '../../assets/images/close.svg'

const TaskWindow = (props) => {
    console.log(props)
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button className={style.buttonClose} onClick={() => { props.setActive(false) }}>
                    <img className={style.imgClose} src={closeButton} />
                </button>
                {props.currentObjTask.newTask}
            </div>
        </div>
    )
}


export default TaskWindow;