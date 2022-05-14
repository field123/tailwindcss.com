import visit from 'unist-util-visit'

export function withLinkRoles() {
  return (tree) => {
    visit(tree, 'element', (element: any) => {
      if (['ol', 'ul'].includes(element.tagName)) {
        element.properties.role = 'list'
      }
    })
  }
}
