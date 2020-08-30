import style from './search.module.scss'
import Icons from "../../../utils/Icons";

export default function Search (props) {
    return (
        <form className={style.search}>
            <div className="uif field">
                <div className="uif field size-full">
                    <div className={`${style.field__input} field__input icon left`}>
                        <i className={`${style.uif__icon} uif icon c-blue-1`}>
                            <Icons icon='search' size={'size-lg'} className={style.search__icon} />
                        </i>
                        <input
                            className={`${style.input} uif input fixed-full`}
                            type="search"
                            placeholder="type some thing" required />
                    </div>
                </div>
            </div>
        </form>
    )
}