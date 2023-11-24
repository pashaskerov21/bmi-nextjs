'use client'
import { ErrorMessage, Field, FormikProps } from 'formik'
import React from 'react'

export type SelectProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    options?: {
        value: number | string,
        name: string,
    }[],
    formik?: FormikProps<any>,
}

const Select: React.FC<SelectProps> = ({ label, name, placeholder, options, ...rest }) => {
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
            <Field as="select" id={name} name={name} {...rest}>
                {/* <option selected disabled value='' className='placeholder'>{placeholder}</option> */}
                {
                    options && options.map((option) => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))
                }
            </Field>
            <ErrorMessage name={name}>
                {(message: string) => (
                    <div className='error'>{message}</div>
                )}
            </ErrorMessage>
        </div>
    )
}

export default Select
