'use client'
import React from 'react'
import Input, { InputProps } from './control/Input'
import Select, { SelectProps } from './control/Select'

type FormControlProps =
    | InputProps
    | SelectProps

const FormControl: React.FC<FormControlProps & { control: string }> = ({ control, ...rest }) => {
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        default:
            return null
    }
}

export default React.memo(FormControl)
