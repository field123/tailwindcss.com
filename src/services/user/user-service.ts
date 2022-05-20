import { RegistrationForm } from './user-types'

export const registerUserAccount = (data: RegistrationForm): void => {
  switch (data._kind) {
    case 'minimal-registration-form': // TODO handle minimal-registration-form
    case 'detailed-registration-form': // TODO handle detailed-registration-form
    default:
      console.log(`Registrations service not yet implemented for ${data._kind}`)
      break
  }
}
