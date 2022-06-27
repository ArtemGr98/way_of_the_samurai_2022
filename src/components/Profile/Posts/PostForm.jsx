import withForm from "../../../hoc/withForm";
import validationPostForm from "../../common/validation/validationPostForm";
import {ErrorMessage, Field, Form} from "formik";

const PostForm = (props) => {
    return (
        <Form>
            <Field type="text" name="post" />
            <ErrorMessage name="post" component="div" />
            <button type="submit" disabled={props.isSubmitting}>
                send
            </button>
        </Form>
    )
}

const initialValues = {
    post: '',
}


export default withForm(PostForm, initialValues, validationPostForm)