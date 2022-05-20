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

export const formFieldCondClasses = <T>(
  fieldName: string,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>
) =>
  clsx(
    'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-slate-900 dark:text-slate-400 dark:border-slate-500',
    errors[fieldName] &&
      touched[fieldName] &&
      'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
  )
