import style from './user.module.scss'
import Icons from "../../../utils/Icons";

export default function User (props) {
    return (
        <div className={style.user}>
            <Icons icon="favorite" className={style.user__favorite} />
            <Icons icon="notification" className={style.user__notification} />

            <div className={style.user__wrapper}>
                <div className={style.user__wrapper__button}>PK.</div>
            </div>
        </div>
    )
}