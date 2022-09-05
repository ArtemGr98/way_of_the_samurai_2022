import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {InputForm, ValidationError} from "../../interface/Form/Form";
import {Button} from "../../interface/Button/Button";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authLogin} from "../../redux/authMe/authMe"

const Login = () => {
    const dispatch = useDispatch()
    const isAuthMe = useSelector(state => state.authMe.authMeData.isAuthMe)
    const captcha = useSelector(state => state.authMe.captcha)

    if (isAuthMe) return <Navigate to="/profile"/>
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email()
                    .required("Required"),
                password: Yup.string()
                    .min(8, "Must be longer than 8 characters")
                    .required("Required"),
            })}
            onSubmit={async (values, actions) => {
                const resulCode = await dispatch(authLogin(values, actions.setStatus))
                actions.setSubmitting(false)
                resulCode === 0 && actions.resetForm({})
            }}>
            {props => (
                <Form>
                    <h1>Login</h1>
                    <div>
                        <Field type="email" name="email" component={InputForm}/>
                        <ErrorMessage name="email" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="password" name="password" component={InputForm}/>
                        <ErrorMessage name="password" component={ValidationError}/>
                    </div>
                    <div>
                        <Field type="checkbox" name="rememberMe" id="rememberMe"/>
                        <label htmlFor="rememberMe">rememberMe</label>
                    </div>
                    {captcha && <div>
                        <img src={captcha} alt="captcha"/>
                        <Field type="text" name="captcha" component={InputForm}/>
                    </div>}
                    <ValidationError>
                        {props.status}
                    </ValidationError>
                    <Button type="submit" disabled={props.isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>

    )
}

export default Login