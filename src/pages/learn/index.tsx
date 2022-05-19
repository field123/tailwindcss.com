import { DocumentationLayout } from '@/layouts/DocumentationLayout'

export default function Learn({ code }) {
  return <p>test</p>
}

Learn.layoutProps = {
  meta: {
    title: 'Installation: Tailwind CLI',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
