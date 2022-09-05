import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TextareaForm, ValidationError} from "../../../interface/Form/Form";
import {Button} from "../../../interface/Button/Button";
import { useDispatch } from "react-redux";
// import {addPost} from "../../../redux/profile/profile";
import {useAddPostMutation} from "../../../redux/profile/profileQueryApi";

const PostForm = () => {

    const dispatch = useDispatch()

    const [addPost] = useAddPostMutation()

    return (
        <Formik
            initialValues={{post: '',}}
            validationSchema={Yup.object().shape({
                post: Yup.string()
                    .required(""),
            })}
            onSubmit={(values, actions) => {
                addPost(values.post)
                actions.resetForm()
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