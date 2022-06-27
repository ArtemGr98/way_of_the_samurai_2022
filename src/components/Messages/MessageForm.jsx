import {ErrorMessage, Field, Form} from "formik";
import validationMessageForm from "../common/validation/validationMessageForm";
import withForm from "../../hoc/withForm";

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

const initialValues = {
    message: '',
}


export default withForm(MessageForm, initialValues, validationMessageForm)