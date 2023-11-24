'use client'
import React from 'react'
import Input, { InputProps } from './control/Input'
import Select, { SelectProps } from './control/Select'
import Textarea, { TextareaProps } from './control/Textarea'
import File, { FileProps } from './control/File'

type FormControlProps =
    | InputProps
    | SelectProps
    | TextareaProps
    | FileProps

const FormControl: React.FC<FormControlProps & { control: string}> = ({ control, ...rest }) => {
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'file':
            return <File {...rest} />
        default:
            return null
    }
}

export default React.memo(FormControl)
