'use client'
import React from 'react'
import { ErrorMessage, Field } from 'formik'
import { FaCloudArrowUp } from "react-icons/fa6";
import { FileControlProps } from '@/src/types';



const File: React.FC<FileControlProps> = ({ label, name, placeholder, ...rest }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [invalidStatus, setInvalidStatus] = React.useState(false);
    React.useEffect(() => {
        if(rest.formik?.errors[name] && rest.formik.touched[name]){
            setInvalidStatus(true)
        }else{
            setInvalidStatus(false);
        }
    },[rest.formik])
    return (
        <div className={`form-control file ${invalidStatus ? 'invalid' : ''}`}>
            <label htmlFor={name}>{label}</label>
            <div className="upload-btn" onClick={() => inputRef.current?.click()}>
                <div className="icon">
                    <FaCloudArrowUp />
                </div>
                <div className="placeholder">
                    {placeholder ? placeholder : ''}
                </div>
                <Field innerRef={inputRef} id={name} name={name} {...rest} />
            </div>
            <ErrorMessage name={name}>
                {(message: string) => (
                    <div className='error'>{message}</div>
                )}
            </ErrorMessage>
        </div>
    )
}

export default File
