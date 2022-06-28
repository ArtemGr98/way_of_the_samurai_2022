import {ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup";
import {TextareaForm, validationError} from "../../../interface/Form/Form";
import {Button} from "../../../interface/Button/Button";

const PostForm = (props) => {
    return (
        <Form>
            <div>
                <Field type="text" name="post" component={TextareaForm} />
                <ErrorMessage name="post" component={validationError} />
            </div>
            <Button type="submit" disabled={!(props.isValid && props.dirty)}>
                send
            </Button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({post: '',}),

    validationSchema: Yup.object().shape({
        post: Yup.string()
            .required(""),
    }),

    handleSubmit: (values, formikBag ) => {
        formikBag.props.addPost(values.post)
        formikBag.setSubmitting(false)
        formikBag.resetForm({})
    },

    displayName: 'PostForm',
})(PostForm);
