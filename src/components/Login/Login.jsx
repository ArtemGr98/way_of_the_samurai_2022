import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";
import {InputForm, ValidationError} from "../../interface/Form/Form";
import {Button} from "../../interface/Button/Button";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    if (props.isAuthMe) return <Navigate to="/profile" />
    return (
        <Form>
            <h1>Login</h1>
            <div>
                <Field type="email" name="email" component={InputForm} />
                <ErrorMessage name="email" component={ValidationError} />
            </div>
            <div>
                <Field type="password" name="password" component={InputForm} />
                <ErrorMessage name="password" component={ValidationError} />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">rememberMe</label>
            </div>
            <ValidationError>
                {props.status}
            </ValidationError>
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
        formikBag.props.authLogin(values, formikBag.setStatus).then((resulCode) => {
            formikBag.setSubmitting(false)
            resulCode === 0 && formikBag.resetForm({})
        })
    },
    displayName: 'LoginForm',
})(Login);
