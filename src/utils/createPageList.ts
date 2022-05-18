import { importAll } from '@/utils/importAll'

export function createPageList(
  files: __WebpackModuleApi.RequireContext,
  base: string,
  fileTypeMatcher = /\.mdx$/
): { [key: string]: { title: string; href: string } } {
  return importAll(files).reduce((acc, cur) => {
    let slug = cur.fileName.substr(2).replace(fileTypeMatcher, '')
    return {
      ...acc,
      [slug]: { ...cur.module.default, href: `/${base}/${slug}` },
    }
  }, {})
}
