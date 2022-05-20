import { DetailedRegistrationForm, MinimalRegistrationForm } from '@/services/user/user-types'
import { object, string, SchemaOf, mixed } from 'yup'

export const detailRegisterSchema: SchemaOf<DetailedRegistrationForm> = object().shape({
  _kind: mixed<'detailed-registration-form'>().strict(true),
  'first-name': string().required('Required'),
  'last-name': string().required('Required'),
  'email-address': string().email().required('Required'),
  organisation: string().required('Required'),
  role: string().required('Required'),
})

export const minimalRegisterSchema: SchemaOf<MinimalRegistrationForm> = object().shape({
  _kind: mixed<'minimal-registration-form'>().strict(true),
  name: string().required('Required'),
  'email-address': string().email().required('Required'),
})
