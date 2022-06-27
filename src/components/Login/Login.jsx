import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";

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
