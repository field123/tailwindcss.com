import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, true, /\.mdx$/),
  'docs'
)

const allPagesDir = (matcher: string, _pages: typeof pages): typeof pages[] =>
  Object.keys(_pages)
    .filter((x) => x.startsWith(matcher))
    .reduce((acc, curr) => [...acc, _pages[curr]], [])

/**
 * Manually specify 
 * {
      title: 'Line Clamp',
      href: 'https://github.com/tailwindlabs/tailwindcss-line-clamp',
    },

    simple all pages in a slug path ...allPagesDir('api/basics', pages) deep matcher
 */
export const documentationNav = {
  'API Reference': [
    {
      ...pages['api'],
      title: 'Introduction',
    },
    ...allPagesDir('api/basics', pages),
  ],
  Promotions: [
    {
      ...pages['api/promotions'],
      title: 'Overview',
    },
    pages['api/promotions/create-a-cart-fixed-discount-promotion'],
    pages['api/promotions/create-a-cart-percent-discount-promotion'],
    pages['api/promotions/create-fixed-bundle-discount-promotion'],
    pages['api/promotions/create-free-gift-promotion'],
  ],
}
