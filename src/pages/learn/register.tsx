import RegisterForm from '@/components/forms/RegisterForm'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'

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
        <RegisterForm />
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
