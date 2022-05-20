import {
  ariaDescribedbyCond,
  ariaInvalidCond,
  formFieldCondClasses,
} from '@/utils/formik-conditionals'
import { Field, ErrorMessage, FormikErrors, FormikTouched } from 'formik'
import ErrorCircle from './ErrorCircle'

interface ISimpleField<T> {
  name: string
  labelText: string
  autoComplete?: string
  errors: FormikErrors<T>
  touched: FormikTouched<T>
}

export default function SimpleField<T>({
  name,
  labelText,
  errors,
  touched,
  autoComplete,
}: ISimpleField<T>) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
        {labelText}
      </label>
      <div className="relative">
        <Field
          type="text"
          name={name}
          id={name}
          autoComplete={autoComplete ? autoComplete : name}
          aria-invalid={ariaInvalidCond(errors, touched, name)}
          aria-describedby={ariaDescribedbyCond(errors, touched, name)}
          aria-required="true"
          className={formFieldCondClasses(errors)}
        />
        <ErrorCircle errors={errors} touched={touched} name={name} />
      </div>

      <ErrorMessage name={name}>
        {(msg) => (
          <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
            {msg}
          </p>
        )}
      </ErrorMessage>
    </>
  )
}
