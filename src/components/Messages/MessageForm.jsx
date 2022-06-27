import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";

const MessageForm = (props) => {
    return (
        <Form>
            <Field type="text" name="message" />
            <ErrorMessage name="message" component="div" />
            <button type="submit" disabled={props.isSubmitting}>
                send
            </button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({message: ''}),

    validationSchema: Yup.object().shape({
        message: Yup.string()
            .required("Required"),
    }),

    handleSubmit: (values, formikBag ) => {
        formikBag.props.addMessage(values.message)
        formikBag.setSubmitting(false)
        formikBag.resetForm({})
    },

    displayName: 'MessageForm',
})(MessageForm);
