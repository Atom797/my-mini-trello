import iconTrello from '../../assets/images/iconTrello.png'
import style from './Header.module.css'

const Header = () => {
    return(
        <div className={style.header}>
            <img src={iconTrello} className={style.icon} />
        </div>
    )
}

export default Header;