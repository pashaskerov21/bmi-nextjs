'use client'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export type SelectProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    options?: {
        value: number | string,
        name: string,
    }[]
}

const Select: React.FC<SelectProps> = ({ label, name, placeholder, options, ...rest }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest}>
                <option selected disabled value='' className='placeholder'>{placeholder}</option>
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
