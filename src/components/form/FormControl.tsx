'use client'
import React from 'react'
import Input, { InputProps } from './control/Input'
import Select, { SelectProps } from './control/Select'
import Textarea, { TextareaProps } from './control/Textarea'

type FormControlProps =
    | InputProps
    | SelectProps
    | TextareaProps

const FormControl: React.FC<FormControlProps & { control: string }> = ({ control, ...rest }) => {
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        default:
            return null
    }
}

export default React.memo(FormControl)
