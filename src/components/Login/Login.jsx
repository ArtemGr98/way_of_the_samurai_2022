import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";
import {InputForm, validationError} from "../../interface/Form/Form";
import {Button} from "../../interface/Button/Button";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    if (props.isAuthMe) return <Navigate to="/profile" />
    return (
        <Form>
            <h1>Login</h1>
            <div>
                <Field type="email" name="email" component={InputForm} />
                <ErrorMessage name="email" component={validationError} />
            </div>
            <div>
                <Field type="password" name="password" component={InputForm} />
                <ErrorMessage name="password" component={validationError} />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">rememberMe</label>
            </div>
            <Button type="submit" disabled={props.isSubmitting}>
                Submit
            </Button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string().email()
            .required("Required"),
        password: Yup.string()
            .min(8, "Must be longer than 8 characters")
            .required("Required"),
    }),

    handleSubmit: (values, formikBag ) => {
        formikBag.props.authLogin(values).then(() => {
            formikBag.setSubmitting(false)
            formikBag.resetForm({})
        })
    },
    displayName: 'LoginForm',
})(Login);
