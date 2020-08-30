import Link from 'next/link';
import {motion} from "framer-motion";
import MainLayout from "../../MainLayout";
import style from './signin.module.scss'
import Icons from "../../../utils/Icons";

export default function Signup () {

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

                    <div className={style.signin__left} style={{'backgroundImage': 'url(/assets/registration/banner.jpg)'}}>
                        <h1>Registration</h1>

                        <h3>Short think</h3>
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

                        <div className="uif field" data-uif-m=" lg-t">
                            <div className="field__title info c-black-6">
                                User gender
                            </div>
                            <div className={style.gender__wrapper}>
                                <label className={`${style.gender__wrapper__male} uif radio solid male`}>
                                    <input type="radio" name="radio" />
                                        <div className="radio__label">
                                            <span className="radio__icon"></span>
                                            <span className="radio__text" data-uif-f="sm">Male</span>
                                        </div>
                                </label>

                                <label className="uif radio solid female">
                                    <input type="radio" name="radio" />
                                    <div className="radio__label">
                                        <span className="radio__icon"></span>
                                        <span className="radio__text" data-uif-f="sm">Female</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className={style.action__wrapper} data-uif-m=" md-t">
                            <button
                                className="uif btn size-lg fixed-lg b-blue-1 h-s-violet-1"
                                data-uif-f="sm"
                                data-uif-r="sm">
                                Registration
                                <i className="icon size-md" data-uif-m=" sm-l">
                                    <Icons icon="login" className={style.loign__icon}/>
                                </i>
                            </button>

                            <Link href={'/auth/signin'}><a className={style.link__signup}>Sign in?</a></Link>
                            <Link href={'/auth/forgotpassword'}><a className={style.link__forgotpassword}>Forgot password?</a></Link>

                        </div>

                    </form>

                </motion.div>
            </div>
        </MainLayout>
    )
}