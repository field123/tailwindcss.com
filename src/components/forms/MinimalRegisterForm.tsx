import { MinimalRegistrationForm } from '@/services/user/user-types'
import { minimalRegisterSchema } from '@/utils/form-validation/register-validation'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { Logo } from '../Logo'
import SimpleField from './SimpleField'

interface IMinimalRegisterForm {
  submitHandler: (
    values: MinimalRegistrationForm,
    formikHelpers: FormikHelpers<MinimalRegistrationForm>
  ) => void | Promise<any>
}

export default function MinimalRegisterForm({ submitHandler }: IMinimalRegisterForm): JSX.Element {
  const initialFormValues: MinimalRegistrationForm = {
    _kind: 'minimal-registration-form',
    name: '',
    'email-address': '',
  }
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto w-auto h-12" />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-slate-200">
            Register for Beta Access
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-slate-800">
            <Formik
              initialValues={initialFormValues}
              validationSchema={minimalRegisterSchema}
              onSubmit={submitHandler}
              validateOnChange={false}
            >
              {({ errors, touched, validateForm }) => {
                return (
                  <Form className="space-y-6">
                    <div>
                      <SimpleField
                        errors={errors}
                        touched={touched}
                        labelText={'Email Address'}
                        autoComplete={'email'}
                        fieldName={'email-address'}
                      />
                    </div>

                    <div>
                      <SimpleField
                        errors={errors}
                        touched={touched}
                        labelText={'Name'}
                        fieldName={'name'}
                        autoComplete="given-name"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign Up
                      </button>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
