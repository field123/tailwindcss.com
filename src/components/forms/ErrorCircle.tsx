import clsx from 'clsx'
import { FormikErrors, FormikTouched } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

interface IErrorCircle<T> {
  name: string
  errors: FormikErrors<T>
  touched: FormikTouched<T>
}

export default function ErrorCircle<T>({ name, errors, touched }: IErrorCircle<T>): JSX.Element {
  return (
    <div
      className={clsx(
        !errors[name] && 'hidden',
        errors[name] &&
          touched[name] &&
          'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'
      )}
    >
      <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
    </div>
  )
}
