'use client'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export type InputProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name}>
                {(message: string) => (
                    <div className='error'>{message}</div>
                )}
            </ErrorMessage>
        </div>
    )
}

export default React.memo(Input)
