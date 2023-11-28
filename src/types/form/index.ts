import { FormikProps } from "formik";
import { TrainingDataType, TrainingTranslateDataType } from "../data";

export type FileControlProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    formik?: FormikProps<any>,
}
export type InputControlProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    formik?: FormikProps<any>,
}
export type SelectControlProps = {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    options?: {
        value: number | string,
        name: string,
    }[],
    formik?: FormikProps<any>,
}
export type TextareaControlProps = {
    label: string,
    name: string,
    placeholder?: string,
    formik?: FormikProps<any>,
}

export type FormControlProps =
| InputControlProps
| SelectControlProps
| TextareaControlProps
| FileControlProps

export type AccordionFormContainerProps = {
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}
export type ApplyFormValues = {
    training_id?: number | string,
    fullname: string,
    workplace: string,
    position: string,
    email: string,
    phone: number | string,
}
export type ApplyContainerProps = {
    activeLocale: string,
    trainingData: TrainingDataType[],
    trainingTranslateData: TrainingTranslateDataType[],
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}
export type ContactFormProps = {
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}
export type ContactFormValues = {
    fullname: string,
    phone: number | string,
    email: string,
    message: string,
}

export type VacanyFormContainerProps = {
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}
export type VacancyFormValues = {
    name: string,
    surname: string,
    phone: number | string,
    email: string,
    cv: string,
}