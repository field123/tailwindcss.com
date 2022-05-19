import { importAll } from '@/utils/importAll'

export function createPageList(
  files: __WebpackModuleApi.RequireContext,
  base: string,
  fileTypeMatcher = /\.mdx$/
): { [key: string]: { title: string; href: string } } {
  return importAll(files).reduce((acc, cur) => {
    const slug: string = cur.fileName.substr(2).replace(fileTypeMatcher, '')
    const finalSlug: string = slug.endsWith('index') ? `${slug.replace('/index', '')}` : `${slug}`
    return {
      ...acc,
      [finalSlug]: {
        ...cur.module.default,
        href: `/${base}/${finalSlug}`,
      },
    }
  }, {})
}
