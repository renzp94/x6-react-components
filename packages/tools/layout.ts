import { DagreLayout } from '@antv/layout'
import { Model } from '@antv/layout'

export const getLayoutData = (data: Model) => {
  const gridLayout = new DagreLayout({
    type: 'dagre',
    rankdir: 'LR',
    ranksep: 30,
    nodesep: 15,
  })

  return gridLayout.layout(data)
}
