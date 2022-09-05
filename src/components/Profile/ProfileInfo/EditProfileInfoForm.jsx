import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {InputForm, ValidationError} from "../../../interface/Form/Form";
import {Button} from "../../../interface/Button/Button";
import {editProfileInfo} from "../../../redux/profile/profile";
import {useDispatch, useSelector} from "react-redux";
import {useEditProfileInfoMutation} from "../../../redux/profile/profileQueryApi";

export const EditProfileInfoForm = ({profileInfo, setEditMode}) => {

    const dispatch = useDispatch()
    const myId = useSelector(state => state.authMe.authMeData.id)

    const [editProfileInfoMutation] = useEditProfileInfoMutation()

    return (
        <Formik
            initialValues={{
                fullName: profileInfo.fullName,
                aboutMe: profileInfo.aboutMe,
                lookingForAJobDescription: profileInfo.lookingForAJobDescription
            }}
            validationSchema={Yup.object().shape({
                fullName: Yup.string()
                    .required(""),
            })}
            onSubmit={async (values, actions) => {
                // const responseData = await dispatch(editProfileInfo(values, myId))
                const responseData = await editProfileInfoMutation(values, myId)
                if (responseData.data.resultCode === 0) {
                    setEditMode(false)
                }
                else {
                    actions.setStatus(responseData.data.messages[0])
                }
                actions.setSubmitting(false);
            }}
        >
            {props => (
                <Form>
                    <div>
                        <div>
                            fullName
                        </div>
                        <Field type="text" name="fullName" component={InputForm}/>
                        <ErrorMessage name="fullName" component={ValidationError}/>
                    </div>
                    <div>
                        <div>
                            aboutMe
                        </div>
                        <Field type="text" name="aboutMe" component={InputForm}/>
                        <ErrorMessage name="aboutMe" component={ValidationError}/>
                    </div>
                    <div>
                        <div>
                            lookingForAJobDescription
                        </div>
                        <Field type="text" name="lookingForAJobDescription" component={InputForm}/>
                        <ErrorMessage name="lookingForAJobDescription" component={ValidationError}/>
                    </div>
                    <ValidationError>
                        {props.status}
                    </ValidationError>
                    <Button type="submit" disabled={!(props.isValid && props.dirty)}>
                        save
                    </Button>
                </Form>
            )}
        </Formik>
    )
}