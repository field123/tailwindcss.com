export function importAll(
  r: __WebpackModuleApi.RequireContext
): { fileName: string; module: { default: { title: string } } }[] {
  return r.keys().map((fileName) => {
    return {
      fileName,
      module: r(fileName),
    }
  })
}
