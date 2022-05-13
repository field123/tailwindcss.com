const css = `
  body {
    display: flex;
  }
  #__next {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export default function Error() {
  return (
    <div className="flex flex-auto items-center justify-center text-center px-4 flex-col sm:flex-row">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-zinc-900/10 sm:dark:border-zinc-300/10 dark:text-zinc-200">
        404
      </h1>
      <h2 className="mt-2 text-lg text-zinc-700 dark:text-zinc-400 sm:mt-0">
        This page could not be found.
      </h2>
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </div>
  )
}

Error.layoutProps = {
  meta: {
    title: '404',
  },
}
