'use client'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export type TextareaProps = {
    label: string,
    name: string,
    placeholder?: string,
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className='form-control'>
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
