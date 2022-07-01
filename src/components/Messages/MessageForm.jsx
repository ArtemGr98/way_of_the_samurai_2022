import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";
import {TextareaForm, ValidationError} from "../../interface/Form/Form";
import {Button} from "../../interface/Button/Button";

const MessageForm = (props) => {
    return (
        <Form>
            <div>
                <Field type="text" name="message" component={TextareaForm} />
                <ErrorMessage name="message" component={ValidationError} />
            </div>
            <Button type="submit" disabled={!(props.isValid && props.dirty)}>
                send
            </Button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({message: ''}),

    validationSchema: Yup.object().shape({
        message: Yup.string()
            .required(""),
    }),

    handleSubmit: (values, formikBag ) => {
        formikBag.props.addMessage(values.message)
        formikBag.setSubmitting(false)
        formikBag.resetForm({})
    },

    displayName: 'MessageForm',
})(MessageForm);
