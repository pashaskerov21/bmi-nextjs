'use client'
import { ErrorMessage, Field, FormikProps } from 'formik'
import React from 'react'

export type InputProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    formik?: FormikProps<any>,
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    const [invalidStatus, setInvalidStatus] = React.useState(false);
    React.useEffect(() => {
        if(rest.formik?.errors[name] && rest.formik.touched[name]){
            setInvalidStatus(true)
        }else{
            setInvalidStatus(false);
        }
    },[rest.formik])
    return (
        <div className={`form-control ${invalidStatus ? 'invalid' : ''}`}>
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
