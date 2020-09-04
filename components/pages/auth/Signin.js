import { SubmissionError } from 'redux-form'
import { useState } from 'react';
import {motion} from "framer-motion"

import MainLayout from "../../MainLayout"
import style from './signin.module.scss'
import SigninForm from "./SigninForm"
import {authAPI} from "../../../api/auth";

export default function Signin () {

    const init = { opacity: 0, scale: 0.9 }
    const animation = { opacity: 1, scale: 1 }
    const exit = { opacity: 0, scale: 0.9 }
    const transition = { duration: 0.2 }

    const [loading, setLoading] = useState(false)

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    let onFormSubmit = async function (formData)  {
        console.log(formData);
        setLoading( true );

        try {
            return sleep(1000).then(() => {
                setLoading(false);

                throw new SubmissionError({
                    email: 'Some email error from backend!',
                    password: 'Some password from backend!',
                    _error: 'Some global error about form!'
                })
            })
        } catch (e) {
            console.log(e);
        }
    }


    authAPI.getPost(1).then(data => {
        console.log(data);
    })



    return (
        <MainLayout>
            <div className="container">
                <motion.div className={style.signin}
                    initial={init}
                    animate={animation}
                    transition={transition}
                    exit={exit}
                >

                    <div className={`${style.signin__left} lazy`} style={{'backgroundImage': 'url(/assets/login/banner.jpg)'}}>
                        <h1>Login in sistem</h1>

                        <h3>Hi there</h3>
                        <p>We took the last flight out. Lily was exhausted by the time the wheels left the ground, fell right to sleep on the boob and cuddled all the way home (a cuddle is a rare treat nowadays so I tried to savour every second!)</p>
                    </div>

                    <div className={`${style.signin__right} ${loading && 'loading'}`}>
                        <SigninForm onSubmit={onFormSubmit}/>

                        <div className="form__loading">
                            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </MainLayout>
    )
}