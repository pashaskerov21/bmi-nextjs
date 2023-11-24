'use client'
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import FormControl from './FormControl'
import { ApplyFormikWrapper } from './style'
import Swal from 'sweetalert2'



type AccordionFormContainerProps = {
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}

const AccordionFormContainer: React.FC<AccordionFormContainerProps> = ({
    formDictionary,
    buttonDictionary }) => {

    type ApplyFormValues = {
        fullname: string,
        workplace: string,
        position: string,
        email: string,
        phone: number | string,
    }
    const initialValues: ApplyFormValues = {
        fullname: "",
        workplace: "",
        position: "",
        email: "",
        phone: "",
    }

    const validationSchema = Yup.object({
        fullname: Yup.string().required(`${formDictionary.error.fullname}`),
        workplace: Yup.string().required(`${formDictionary.error.workplace}`),
        position: Yup.string().required(`${formDictionary.error.position}`),
        email: Yup.string().email(`${formDictionary.error.email_format}`).required(`${formDictionary.error.email}`),
        phone: Yup.string().required(`${formDictionary.error.phone}`),
    })

    const onSubmit = (values: ApplyFormValues, actions: FormikHelpers<ApplyFormValues>) => {
        console.log(values);
        actions.resetForm();

        Swal.fire({
            icon: "success",
            title: formDictionary.success.congrulations,
            text: formDictionary.success.apply_text,
        });
    }
    return (
        <ApplyFormikWrapper>
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
                                name='fullname'
                                label={formDictionary.label.fullname + ' *'}
                                placeholder={formDictionary.placeholder.fullname}
                                formik={formik} />
                            <FormControl
                                control='input'
                                type="text"
                                name='workplace'
                                label={formDictionary.label.workplace  + ' *'}
                                placeholder={formDictionary.placeholder.workplace}
                                formik={formik}
                            />
                            <FormControl
                                control='input'
                                type="text"
                                name='position'
                                label={formDictionary.label.position  + ' *'}
                                placeholder={formDictionary.placeholder.position}
                                formik={formik}
                            />
                            <FormControl
                                control='input'
                                type="email"
                                name='email'
                                label={formDictionary.label.email  + ' *'}
                                placeholder={formDictionary.placeholder.email}
                                formik={formik}
                            />
                            <FormControl
                                control='input'
                                type="number"
                                name='phone'
                                label={formDictionary.label.phone  + ' *'}
                                placeholder={formDictionary.placeholder.phone}
                                formik={formik}
                            />

                            <button type="submit">{buttonDictionary.apply}</button>
                        </Form>
                    )
                }
            </Formik>
        </ApplyFormikWrapper>
    )
}

export default React.memo(AccordionFormContainer)
