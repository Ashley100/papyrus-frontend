import Link from 'next/link'
import Icons from '../../utils/Icons'
import style from './header.module.scss'
import Search from "./Search/Search";
import User from "./User/User";

export default function Header () {
    return (
        <div className={style.header}>
            <div className={`${style.header__wrapper} container grid fixed__auto__fixed`}>
                <div className={style.header__left}>
                    <Link href={"/"}>
                        <a className={style.header__logo}>
                            <span className={style.logo__wrapper}><Icons icon='logo' size={'size-lg'} className={style.logo} /></span>
                            <Icons icon='logo__ps' size={'size-bg'} className={style.logo__ps} />
                        </a>
                    </Link>
                </div>

                <div className={style.header__center}>
                    <Search />
                </div>

                <div className={style.header__right}>
                    <User />
                </div>

                </div>
        </div>
    )
}



