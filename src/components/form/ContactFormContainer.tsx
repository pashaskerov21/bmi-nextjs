import React from 'react'
import * as Yup from 'yup'
import { Form, Formik, FormikHelpers } from 'formik'
import Swal from 'sweetalert2'
import FormControl from './FormControl'
import { ContactFormProps, ContactFormValues } from '@/src/types'


const ContactForm: React.FC<ContactFormProps> = ({ buttonDictionary, formDictionary }) => {
    
    const initialValues: ContactFormValues = {
        fullname: "",
        phone: "",
        email: "",
        message: "",
    }
    const validationSchema = Yup.object({
        fullname: Yup.string().required(`${formDictionary.error.fullname}`),
        phone: Yup.string().required(`${formDictionary.error.phone}`),
        email: Yup.string().email(`${formDictionary.error.email_format}`).required(`${formDictionary.error.email}`),
        message: Yup.string().required(`${formDictionary.error.message}`),
    })
    const onSubmit = (values: ContactFormValues, actions: FormikHelpers<ContactFormValues>) => {
        console.log(values);
        actions.resetForm();

        Swal.fire({
            icon: "success",
            title: formDictionary.success.congrulations,
            text: formDictionary.success.contact_text,
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
                                name='fullname'
                                label={formDictionary.label.fullname + ' *'}
                                placeholder={formDictionary.placeholder.fullname}
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
                                control='textarea'
                                name='message'
                                label={formDictionary.label.message + ' *'}
                                placeholder={formDictionary.placeholder.message}
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

export default React.memo(ContactForm)
