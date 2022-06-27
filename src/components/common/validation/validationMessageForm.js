import * as Yup from "yup";

const validationPostForm = Yup.object().shape({
    message: Yup.string()
        .required("Required"),
});
export default validationPostForm;