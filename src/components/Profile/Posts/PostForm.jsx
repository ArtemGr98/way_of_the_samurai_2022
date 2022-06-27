import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";

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

export default withFormik({
    mapPropsToValues: () => ({post: '',}),

    validationSchema: Yup.object().shape({
        post: Yup.string()
            .required("Required"),
    }),

    handleSubmit: (values, formikBag ) => {
        formikBag.props.addPost(values.post)
        formikBag.setSubmitting(false)
        formikBag.resetForm({})
    },

    displayName: 'PostForm',
})(PostForm);
