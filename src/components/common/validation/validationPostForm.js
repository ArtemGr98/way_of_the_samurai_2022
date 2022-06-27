import * as Yup from "yup";

const validationPostForm = Yup.object().shape({
    post: Yup.string()
        .required("Required"),
});
export default validationPostForm;