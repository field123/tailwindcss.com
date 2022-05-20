import clsx from 'clsx'
import { FormikErrors, FormikTouched } from 'formik'

export const ariaInvalidCond = <T>(
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
  fieldName: string
) => (errors[fieldName] && touched[fieldName] ? 'true' : null)

export const ariaDescribedbyCond = <T>(
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
  fieldName: string
) => (errors[fieldName] && touched[fieldName] ? `${fieldName}-error` : null)

export const formFieldCondClasses = <T>(errors: FormikErrors<T>) =>
  clsx(
    'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md',
    errors['email-address'] &&
      'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
  )
