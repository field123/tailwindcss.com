import { DetailedRegistrationForm } from '@/services/user/user-types'
import { detailRegisterSchema } from '@/utils/form-validation/register-validation'
import {
  ariaDescribedbyCond,
  ariaInvalidCond,
  formFieldCondClasses,
} from '@/utils/formik-conditionals'
import { Formik, Field, FormikHelpers, ErrorMessage } from 'formik'
import ErrorCircle from './ErrorCircle'
import SimpleField from './SimpleField'

interface IDetailedRegisterForm {
  submitHandler: (
    values: DetailedRegistrationForm,
    formikHelpers: FormikHelpers<DetailedRegistrationForm>
  ) => void | Promise<any>
}

export default function DetailedRegisterForm({
  submitHandler,
}: IDetailedRegisterForm): JSX.Element {
  const initialFormValues: DetailedRegistrationForm = {
    _kind: 'detailed-registration-form',
    'first-name': '',
    'last-name': '',
    'email-address': '',
    organisation: '',
    role: '',
  }
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <Formik
            initialValues={initialFormValues}
            validationSchema={detailRegisterSchema}
            onSubmit={submitHandler}
          >
            {({ errors, touched, validateForm }) => {
              return (
                <div className="sm:rounded-md">
                  <div className="py-5 sm:py-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                        >
                          First name
                        </label>
                        <Field
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                        >
                          Last name
                        </label>
                        <Field
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <SimpleField
                          errors={errors}
                          touched={touched}
                          labelText={'Email Address'}
                          autoComplete={'email'}
                          name={'email-address'}
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="organisation"
                          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                        >
                          Organisation
                        </label>
                        <Field
                          type="text"
                          name="organisation"
                          id="organisation"
                          autoComplete="organisation"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                        >
                          Role
                        </label>
                        <Field
                          type="text"
                          name="role"
                          id="role"
                          autoComplete="role"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-3 sm:py-6">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}
