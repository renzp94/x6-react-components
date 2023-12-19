import { Graph } from '@antv/x6'
import { memo } from 'react'
import { REACT_COMPONENT, X6ReactComponentNode } from '.'

const X6ReactComponent: React.ComponentType<{
  node: X6ReactComponentNode
  graph: Graph
}> = ({ node }: { node: X6ReactComponentNode }) => {
  return <>{node[REACT_COMPONENT]}</>
}

export default memo(X6ReactComponent)
