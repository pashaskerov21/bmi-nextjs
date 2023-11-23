import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import FormControl from './FormControl'


type ContactFormrProps = {
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}

const ContactForm: React.FC<ContactFormrProps> = ({ buttonDictionary, formDictionary }) => {
    type ContactFormValues = {
        fullname: string,
        phone: number | string,
        email: string,
        message: string,
    }
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
                                label={formDictionary.label.fullname}
                                placeholder={formDictionary.placeholder.fullname}
                            />
                            <FormControl
                                control='input'
                                type="number"
                                name='phone'
                                label={formDictionary.label.phone}
                                placeholder={formDictionary.placeholder.phone}
                            />
                            <FormControl
                                control='input'
                                type="email"
                                name='email'
                                label={formDictionary.label.email}
                                placeholder={formDictionary.placeholder.email}
                            />
                            <FormControl
                                control='textarea'
                                name='message'
                                label={formDictionary.label.message}
                                placeholder={formDictionary.placeholder.message}
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
