import {
  ariaDescribedbyCond,
  ariaInvalidCond,
  formFieldCondClasses,
} from '@/utils/formik-conditionals'
import { Field, ErrorMessage, FormikErrors, FormikTouched } from 'formik'
import ErrorCircle from './ErrorCircle'

interface ISimpleField<T> {
  fieldName: string
  labelText: string
  autoComplete?: string
  errors: FormikErrors<T>
  touched: FormikTouched<T>
}

export default function SimpleField<T>({
  fieldName,
  labelText,
  errors,
  touched,
  autoComplete,
}: ISimpleField<T>) {
  return (
    <>
      <label
        htmlFor={fieldName}
        className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
      >
        {labelText}
      </label>
      <div className="relative">
        <Field
          type="text"
          name={fieldName}
          id={fieldName}
          autoComplete={autoComplete ? autoComplete : fieldName}
          aria-invalid={ariaInvalidCond(errors, touched, fieldName)}
          aria-describedby={ariaDescribedbyCond(errors, touched, fieldName)}
          aria-required="true"
          className={formFieldCondClasses(fieldName, errors, touched)}
        />
        <ErrorCircle errors={errors} touched={touched} fieldName={fieldName} />
      </div>

      <ErrorMessage name={fieldName}>
        {(msg) => (
          <p className="mt-2 text-sm text-red-600" id={`${fieldName}-error`}>
            {msg}
          </p>
        )}
      </ErrorMessage>
    </>
  )
}
