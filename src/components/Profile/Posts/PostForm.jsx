import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TextareaForm, ValidationError} from "../../../interface/Form/Form";
import {Button} from "../../../interface/Button/Button";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/actions/actionsCreators";

const PostForm = () => {

    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{post: '',}}
            validationSchema={Yup.object().shape({
                post: Yup.string()
                    .required(""),
            })}
            onSubmit={(values, actions) => { 
                dispatch(addPost(values.post))
                actions.resetForm({
                    values: {
                        post: ''
                    }
                })
                //actions.setSubmitting(false);
            }}
        >
            {props => (
                <Form>
                    <div>
                        <Field type="text" name="post" component={TextareaForm} />
                        <ErrorMessage name="post" component={ValidationError} />
                    </div>
                    <Button type="submit" disabled={!(props.isValid && props.dirty)}>
                        send
                    </Button>
                </Form>
            )}
        </Formik>

    )
}

export default PostForm