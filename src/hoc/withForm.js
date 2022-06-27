import {Formik} from "formik";
import React from 'react'

const withForm = (Component, initialValues, validationForm) => {
    class FormContainer extends React.Component {
        render() {
            return <Formik
                initialValues={initialValues}
                onSubmit={this.props.onSubmitForm}
                validationSchema={validationForm}
            >
                {({ isSubmitting }) => (
                    <Component isSubmitting={isSubmitting} />
                )}
            </Formik>
        }
    }
    return FormContainer
}

export default withForm