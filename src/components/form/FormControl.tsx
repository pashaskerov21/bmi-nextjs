'use client'
import React from 'react'
import Input from './control/Input'
import Select from './control/Select'
import Textarea from './control/Textarea'
import File from './control/File'
import { FormControlProps } from '@/src/types'

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
