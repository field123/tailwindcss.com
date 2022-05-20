export interface DetailedRegistrationForm {
  _kind: 'detailed-registration-form'
  'first-name': string
  'last-name': string
  'email-address': string
  organisation: string
  role: string
}

export interface MinimalRegistrationForm {
  _kind: 'minimal-registration-form'
  name: string
  'email-address': string
}

export type RegistrationForm = DetailedRegistrationForm | MinimalRegistrationForm
