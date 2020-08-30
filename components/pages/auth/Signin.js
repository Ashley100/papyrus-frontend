import Link from 'next/link'
import {motion} from "framer-motion";

import MainLayout from "../../MainLayout";
import style from './signin.module.scss'
import Icons from "../../../utils/Icons";

export default function Signin () {

    const init = { x: 24, opacity: 0 }
    const animation = { x: 0, opacity: 1 }
    const transition = { duration: 0.5 }

    return (
        <MainLayout>
            <div className="container">
                <motion.div className={style.signin}
                    initial={init}
                    animate={animation}
                    transition={transition}
                >

                    <div className={`${style.signin__left} lazy`} style={{'backgroundImage': 'url(/assets/login/banner.jpg)'}}>
                        <h1>Login in sistem</h1>

                        <h3>Hi there</h3>
                        <p>We took the last flight out. Lily was exhausted by the time the wheels left the ground, fell right to sleep on the boob and cuddled all the way home (a cuddle is a rare treat nowadays so I tried to savour every second!)</p>
                    </div>

                    <form className={style.signin__right}>
                        <div className="uif field required" data-uif-m=" lg-t">
                            <div className="field__title info c-black-6">
                                User login
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

                        <div className="uif field required" data-uif-m=" lg-t">
                            <div className="field__title info c-black-6">
                                User password
                                <i className="uif icon"><span className="far fa-question-circle"></span></i>
                            </div>

                            <div className="field__input icon left">
                                <i className="uif icon c-blue-1"><span className="fas fa-key"></span></i>
                                <input
                                    className="uif input fixed-full"
                                    type="password"
                                    placeholder="password" required />
                            </div>

                            <small className="field__message hidden">Password is incorrect!</small>
                        </div>

                        <label className="uif checkbox" data-uif-m=" md-t">
                            <input type="checkbox" />
                            <div className="checkbox__label">
                                <span className="checkbox__icon"></span>
                                <span className="checkbox__text">Remember me</span>
                            </div>
                        </label>

                        <div className={style.action__wrapper} data-uif-m=" md-t">
                            <button
                                className="uif btn size-lg fixed-lg b-blue-1 h-s-violet-1"
                                data-uif-f="sm"
                                data-uif-r="sm">
                                Login
                                <i className="icon size-md" data-uif-m=" sm-l">
                                    <Icons icon="login" className={style.loign__icon}/>
                                </i>
                            </button>

                            <Link href={'/auth/signup'}><a className={style.link__signup}>Sign up?</a></Link>
                            <Link href={'/auth/forgotpassword'}><a className={style.link__forgotpassword}>Forgot password?</a></Link>

                        </div>

                    </form>

                </motion.div>
            </div>
        </MainLayout>
    )
}