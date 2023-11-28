'use client'
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import FormControl from './FormControl'
import { ApplyFormikWrapper } from './style'
import Swal from 'sweetalert2'
import { ApplyContainerProps, ApplyFormValues } from '@/src/types'


const ApplyFormContainer: React.FC<ApplyContainerProps> = ({
  activeLocale,
  trainingData,
  trainingTranslateData,
  formDictionary,
  buttonDictionary }) => {

  const initialValues: ApplyFormValues = {
    training_id: "",
    fullname: "",
    workplace: "",
    position: "",
    email: "",
    phone: "",
  }

  const trainingSelectOptions = trainingData.map((data) => {
    let trainingId = data.id;
    let requiredTranslate = trainingTranslateData.find((t) => t.lang === activeLocale && t.training_id === data.id);
    return {
      value: trainingId,
      name: requiredTranslate ? requiredTranslate.title : "",
    }
  })

  const validationSchema = Yup.object({
    training_id: Yup.string().required(`${formDictionary.error.training}`),
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
                control='select'
                name='training_id'
                label={formDictionary.label.training}
                placeholder={formDictionary.placeholder.training}
                options={trainingSelectOptions}
                formik={formik}
              />
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
                label={formDictionary.label.workplace + ' *'}
                placeholder={formDictionary.placeholder.workplace}
                formik={formik}
              />
              <FormControl
                control='input'
                type="text"
                name='position'
                label={formDictionary.label.position + ' *'}
                placeholder={formDictionary.placeholder.position}
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
                control='input'
                type="number"
                name='phone'
                label={formDictionary.label.phone + ' *'}
                placeholder={formDictionary.placeholder.phone}
                formik={formik}
              />

              <button type="submit">{buttonDictionary.send_application}</button>
            </Form>
          )
        }
      </Formik>
    </ApplyFormikWrapper>
  )
}

export default React.memo(ApplyFormContainer)
