import { GridLayout } from '@antv/layout'

export interface X6LayoutProps {
  render: (layout: any) => void
}

const X6Layout = (props: X6LayoutProps) => {
  const gridLayout = new GridLayout({
    type: 'grid',
    width: 1000,
    height: 1000,
    nodeSize: 100,
    rows: 4,
    cols: 4,
  })
  props?.render?.(gridLayout)
  return null
}

export default X6Layout
