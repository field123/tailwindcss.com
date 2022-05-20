import type { NextPageWithLayout } from '../utils/layout-types'
import { RegistrationLayout } from '@/layouts/RegistrationLayout'
import MinimalRegisterForm from '@/components/forms/MinimalRegisterForm'
import { registerUserAccount } from '@/services/user/user-service'

const Register: NextPageWithLayout = () => {
  return <MinimalRegisterForm submitHandler={(values) => registerUserAccount(values)} />
}

Register.layoutProps = {
  meta: {
    title: 'Register',
  },
  Layout: RegistrationLayout,
}

export default Register
