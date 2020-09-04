import Link from 'next/link'
import {motion} from "framer-motion";

import MainLayout from "../../MainLayout";
import style from './signin.module.scss'
import Icons from "../../../utils/Icons";

export default function Signup () {

    const init = { opacity: 0, scale: 0.9 }
    const animation = { opacity: 1, scale: 1 }
    const exit = { opacity: 0, scale: 0.9 }
    const transition = { duration: 0.2 }

    return (
        <MainLayout>
            <div className="container">

                <motion.div className={style.signin}
                    initial={init}
                    animate={animation}
                    transition={transition}
                    exit={exit}
                >

                    <div className={style.signin__left} style={{'backgroundImage': 'url(/assets/login/banner.jpg)'}}>
                        <h1>Forgot password</h1>
                    </div>

                    <form className={style.signin__right}>
                        <div className="uif field required" data-uif-m=" lg-t">
                            <div className="field__title info c-black-6">
                                User email
                                <i className="uif icon"><span className="far fa-question-circle"></span></i>
                            </div>

                            <div className="field__input icon left">
                                <i className="uif icon c-blue-1">
                                    <span className="fas fa-user"></span>
                                </i>
                                <input
                                    className="uif input fixed-full"
                                    type="email"
                                    placeholder="example@gmail.com" required />
                            </div>

                            <small className="field__message hidden">Password is incorrect!</small>
                        </div>


                        <div className={style.action__wrapper} data-uif-m=" md-t">
                            <button
                                className="uif btn size-lg fixed-lg b-blue-1 h-s-violet-1"
                                data-uif-f="sm"
                                data-uif-r="sm">
                                Submit
                            </button>

                            <Link href={'/auth/signup'}><a className={style.link__signup}>Sign up?</a></Link>

                        </div>

                    </form>

                </motion.div>

            </div>
        </MainLayout>
    )
}