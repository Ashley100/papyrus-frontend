import { Field, reduxForm, formValueSelector } from "redux-form"
import { required, email, password } from "../../../utils/formValidators"
import inputText from "../../common/formFields/inputText"
import radio from "../../common/formFields/radio"

import style from "./signin.module.scss"
import Icons from "../../../utils/Icons"
import Link from "next/link"
import {connect} from "react-redux";


const SignupForm = (props) => {

    const { handleSubmit } = props;

    const confirmPassValidator = value => props.password !== value ? "Password is not similar!" : undefined;

    return (
        <form onSubmit={handleSubmit} className={style.signin__right}>

            <Field name="email" type="email" className="uif input fixed-full" placeholder="example@gmail.com"
                   component={inputText}
                   validate={[required, email]}
                   config={{
                       title: 'User email',
                       title_iconName: 'help',
                       input_iconName: 'user',
                       input_icon_position: 'left',
                       required: true,
                   }}
            />

            <Field name="password" type="password" className="uif input fixed-full"
                   component={inputText}
                   validate={[required, password]}
                   config={{
                       title: 'User password',
                       title_iconName: 'help',
                       input_iconName: 'password',
                       input_icon_position: 'left',
                       required: true,
                   }}
            />

            <Field name="passwordConfirm" type="password" className="uif input fixed-full"
                   component={inputText}
                   validate={[required, confirmPassValidator]}
                   config={{
                       title: 'Confirm password',
                       input_iconName: 'password',
                       input_icon_position: 'left',
                       required: true,
                   }}
            />

            <div className={style.gender__wrapper}>
                <Field name="rememberMe" type="radio" className={`uif radio solid ${style.gender__wrapper__male}`}
                   component={radio}
                   config={{
                       title: 'Male',
                   }}
                />
                <Field name="rememberMe" type="radio" className="uif radio solid"
                   component={radio}
                   config={{
                       title: 'Female',
                   }}
                />
            </div>

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

                <Link href={'/auth/signin'}><a className={style.link__signup}>Sign in?</a></Link>
                <Link href={'/auth/forgotpassword'}><a className={style.link__forgotpassword}>Forgot password?</a></Link>

            </div>

        </form>
    )
};

let SignupReduxForm = reduxForm({
    form: 'auth/signup'
})(SignupForm);


// Compare passwords
const formSelector = formValueSelector('auth/signup');
SignupReduxForm = connect(state => {

    const password = formSelector(state, 'password');
    // console.log(passwords);

    return { password }

})(SignupReduxForm);



export default SignupReduxForm;