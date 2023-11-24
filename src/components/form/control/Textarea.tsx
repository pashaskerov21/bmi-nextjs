'use client'
import { ErrorMessage, Field, FormikProps } from 'formik'
import React from 'react'

export type TextareaProps = {
    label: string,
    name: string,
    placeholder?: string,
    formik?: FormikProps<any>,
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    const [invalidStatus, setInvalidStatus] = React.useState(false);
    React.useEffect(() => {
        if (rest.formik?.errors[name] && rest.formik.touched[name]) {
            setInvalidStatus(true)
        } else {
            setInvalidStatus(false);
        }
    }, [rest.formik])
    return (
        <div className={`form-control ${invalidStatus ? 'invalid' : ''}`}>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name}>
                {(message: string) => (
                    <div className='error'>{message}</div>
                )}
            </ErrorMessage>
        </div>
    )
}

export default React.memo(Textarea)
