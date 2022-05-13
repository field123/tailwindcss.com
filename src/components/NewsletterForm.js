export function NewsletterForm({ action }) {
  return (
    <form action={action} method="post" className="flex flex-wrap -mx-2">
      <div className="px-2 grow-[9999] basis-64 mt-3">
        <div className="group relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-6 h-full absolute inset-y-0 left-3 text-zinc-400 pointer-events-none group-focus-within:text-blue-500 dark:group-focus-within:text-zinc-400"
          >
            <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
            <path d="m6 7 6 5 6-5" />
          </svg>
          <input
            name="email_address"
            type="email"
            required
            aria-label="Email address"
            className="appearance-none shadow rounded-md ring-1 ring-zinc-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-zinc-400 pl-12 pr-3 block w-full text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-700/20 dark:ring-zinc-200/20 dark:focus:ring-blue-500 dark:text-white"
            placeholder="Subscribe via email"
          />
        </div>
      </div>
      <div className="px-2 grow flex mt-3">
        <button
          type="submit"
          className="bg-blue-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 dark:focus:ring-offset-zinc-900 dark:focus:ring-blue-700"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}
