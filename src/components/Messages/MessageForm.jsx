import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TextareaForm, ValidationError} from "../../interface/Form/Form";
import {Button} from "../../interface/Button/Button";
import {useDispatch} from "react-redux";
import {addMessage} from "../../redux/messages/messages";

const MessageForm = () => {

    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{message: ''}}
            validationSchema={Yup.object().shape({
                message: Yup.string()
                    .required(""),
            })}
            onSubmit={(values, actions) => {
                dispatch(addMessage(values.message))
                actions.resetForm({
                    values: {
                        message: ''
                    }
                })
            }}
        >
            {props => (
                <Form>
                    <div>
                        <Field type="text" name="message" component={TextareaForm}/>
                        <ErrorMessage name="message" component={ValidationError}/>
                    </div>
                    <Button type="submit" disabled={!(props.isValid && props.dirty)}>
                        send
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default MessageForm