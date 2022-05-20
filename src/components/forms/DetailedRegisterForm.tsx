import { DetailedRegistrationForm } from '@/services/user/user-types'
import { detailRegisterSchema } from '@/utils/form-validation/register-validation'
import { Formik, FormikHelpers } from 'formik'
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
            validateOnChange={false}
          >
            {({ errors, touched, validateForm }) => {
              return (
                <div className="sm:rounded-md">
                  <div className="py-5 sm:py-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <SimpleField
                          errors={errors}
                          touched={touched}
                          labelText={'First Name'}
                          fieldName={'first-name'}
                          autoComplete="given-name"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <SimpleField
                          errors={errors}
                          touched={touched}
                          labelText={'Last Name'}
                          fieldName={'last-name'}
                          autoComplete="family-name"
                        />
                      </div>

                      <div className="col-span-6">
                        <SimpleField
                          errors={errors}
                          touched={touched}
                          labelText={'Email Address'}
                          autoComplete={'email'}
                          fieldName={'email-address'}
                        />
                      </div>

                      <div className="col-span-6">
                        <SimpleField
                          errors={errors}
                          touched={touched}
                          labelText={'Organisation'}
                          fieldName={'organisation'}
                        />
                      </div>

                      <div className="col-span-6">
                        <SimpleField
                          errors={errors}
                          touched={touched}
                          labelText={'Role'}
                          fieldName={'role'}
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
