import clsx from 'clsx'
import { FormikErrors, FormikTouched } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

interface IErrorCircle<T> {
  fieldName: string
  errors: FormikErrors<T>
  touched: FormikTouched<T>
}

export default function ErrorCircle<T>({
  fieldName,
  errors,
  touched,
}: IErrorCircle<T>): JSX.Element {
  return (
    <div
      className={clsx(
        !errors[fieldName] || !touched[fieldName] ? 'hidden' : null,
        errors[fieldName] &&
          touched[fieldName] &&
          'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'
      )}
    >
      <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
    </div>
  )
}
