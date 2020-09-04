import { Field, reduxForm } from 'redux-form';
import { required, email, password } from '../../../utils/formValidators'
import inputText from "../../common/formFields/inputText";
import checkbox from "../../common/formFields/checkbox";

import style from "./signin.module.scss";
import Icons from "../../../utils/Icons";
import Link from "next/link";


let SigninForm = (props) => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="loading__wrapper">
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

                <Field name="rememberMe" type="checkbox" className="uif checkbox"
                       component={checkbox}
                       config={{
                           title: 'Remember me',
                       }}
                />

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
            </div>

        </form>
    )
};

let SigninReduxForm = reduxForm({
    form: 'auth/signin'
})(SigninForm);

export default SigninReduxForm;