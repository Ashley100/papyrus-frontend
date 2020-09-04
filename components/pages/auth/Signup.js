import Link from 'next/link';
import {motion} from "framer-motion";
import MainLayout from "../../MainLayout";
import style from './signin.module.scss'
import Icons from "../../../utils/Icons";
import SignupReduxForm from "./SignupForm";

export default function Signup () {

    const init = { opacity: 0, scale: 0.9 }
    const animation = { opacity: 1, scale: 1 }
    const exit = { opacity: 0, scale: 0.9 }
    const transition = { duration: 0.2 }


    let onFormSubmit = formData => {
        console.log(formData);
    }

    return (
        <MainLayout>
            <div className="container">
                <motion.div className={style.signin}
                    initial={init}
                    animate={animation}
                    transition={transition}
                    exit={exit}
                >

                    <div className={style.signin__left} style={{'backgroundImage': 'url(/assets/registration/banner.jpg)'}}>
                        <h1>Registration</h1>

                        <h3>Short think</h3>
                        <p>We took the last flight out. Lily was exhausted by the time the wheels left the ground, fell right to sleep on the boob and cuddled all the way home (a cuddle is a rare treat nowadays so I tried to savour every second!)</p>
                    </div>

                    <SignupReduxForm onSubmit={onFormSubmit} />

                </motion.div>
            </div>
        </MainLayout>
    )
}