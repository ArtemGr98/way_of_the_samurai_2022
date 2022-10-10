import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {InputForm, ValidationError} from "../../../interface/Form/Form";
import {Button} from "../../../interface/Button/Button";
import {useEditProfileInfoMutation} from "../../../redux/profile/profileQueryApi";
import { useAppSelector } from "../../../hook";
import { IProfileInfo } from "../../../redux/profile/profileQueryApiTypes";
import { FC } from "react";

type EditProfileInfoFormProps = {
    profileInfo: IProfileInfo
    setEditMode: (value: boolean) => void
}

export const EditProfileInfoForm: FC<EditProfileInfoFormProps> = ({profileInfo, setEditMode}) => {

    const myId = useAppSelector(state => state.authMe.authMeData.id)

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
            onSubmit={(values, actions) => {
                editProfileInfoMutation(values).unwrap()
                .then((payload) => {
                    setEditMode(false)
                    if (payload.resultCode === 0) {
                        setEditMode(false)
                    }
                    else {
                        actions.setStatus(payload.messages[0])
                    }
                })
                .catch((error) => console.log(error))
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