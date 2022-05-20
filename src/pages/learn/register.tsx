import DetailedRegisterForm from '@/components/forms/DetailedRegisterForm'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { registerUserAccount } from '@/services/user/user-service'

export default function Register(): JSX.Element {
  return (
    <div className="mt-10">
      <h2 className="inline-block text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight dark:text-zinc-200">
        That’s it – nicely done.
      </h2>
      <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
        Now that you’ve seen the opportunities with Elastic Path’s e-commerce, sign up to gain
        access to our learning center and stay up to date on new features, guides and case studies.
      </p>
      <section className="max-w-xl">
        <DetailedRegisterForm submitHandler={(values) => registerUserAccount(values)} />
      </section>
    </div>
  )
}

Register.layoutProps = {
  meta: {
    title: 'Register Elastic Path Commerce Cloud',
  },
  Layout: DocumentationLayout,
}
