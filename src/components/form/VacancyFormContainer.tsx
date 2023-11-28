'use client'
import React from 'react'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import FormControl from './FormControl'
import { Form, Formik, FormikHelpers } from 'formik'
import { VacancyFormValues, VacanyFormContainerProps } from '@/src/types'

const VacancyFormContainer: React.FC<VacanyFormContainerProps> = ({ buttonDictionary, formDictionary }) => {
    
    const initialValues: VacancyFormValues = {
        name: "",
        surname: "",
        phone: "",
        email: "",
        cv: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required(`${formDictionary.error.name}`),
        surname: Yup.string().required(`${formDictionary.error.surname}`),
        phone: Yup.string().required(`${formDictionary.error.phone}`),
        email: Yup.string().email(`${formDictionary.error.email_format}`).required(`${formDictionary.error.email}`),
        cv: Yup.string().required(`${formDictionary.error.cv}`),
    })
    const onSubmit = (values: VacancyFormValues, actions: FormikHelpers<VacancyFormValues>) => {
        console.log(values);
        actions.resetForm();

        Swal.fire({
            icon: "success",
            title: formDictionary.success.congrulations,
            text: formDictionary.success.apply_text,
        });
    }
    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>
                            <FormControl
                                control='input'
                                type="text"
                                name='name'
                                label={formDictionary.label.name + ' *'}
                                placeholder={formDictionary.placeholder.name}
                                formik={formik} />
                            <FormControl
                                control='input'
                                type="text"
                                name='surname'
                                label={formDictionary.label.surname + ' *'}
                                placeholder={formDictionary.placeholder.surname}
                                formik={formik}
                            />
                            <FormControl
                                control='input'
                                type="number"
                                name='phone'
                                label={formDictionary.label.phone + ' *'}
                                placeholder={formDictionary.placeholder.phone}
                                formik={formik}
                            />
                            <FormControl
                                control='input'
                                type="email"
                                name='email'
                                label={formDictionary.label.email + ' *'}
                                placeholder={formDictionary.placeholder.email}
                                formik={formik}
                            />
                            <FormControl
                                control='file'
                                type="file"
                                name='cv'
                                label={formDictionary.label.cv + ' *'}
                                placeholder={formDictionary.placeholder.cv}
                                formik={formik}
                            />
                            <button type="submit">{buttonDictionary.send}</button>
                        </Form>
                    )
                }
            </Formik>
        </React.Fragment>
    )
}

export default VacancyFormContainer
