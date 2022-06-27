import authAPI from "../../api/auth";
import withForm from "../../hoc/withForm";
import validationLoginForm from "../common/validation/validationLoginForm";
import {ErrorMessage, Field, Form} from "formik";

const Login = (props) => {
    return (
        <Form>
            <h1>Login</h1>
            <div>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
            </div>
            <div>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">rememberMe</label>
            </div>
            <button type="submit" disabled={props.isSubmitting}>
                Submit
            </button>
        </Form>
    )
}

const initialValues = {
    email: '',
    password: '',
    rememberMe: false
}

const onSubmitLoginForm = (values, {setSubmitting}) => {
    console.log(values)
    authAPI.login(values).then(data => {
        console.log(data)
        if (data.resultCode !== 0) {
            alert(data.messages[0])
        }
        setSubmitting(false);
    })
}

export default withForm(Login, initialValues, onSubmitLoginForm, validationLoginForm)