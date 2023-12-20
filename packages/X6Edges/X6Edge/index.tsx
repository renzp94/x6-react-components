import { Edge } from '@antv/x6'
import { useContext, useEffect } from 'react'
import { GraphContext } from '../../X6Graph'

export interface X6EdgeProps extends Edge.Metadata {
  marker?:
    | 'block'
    | 'classic'
    | 'diamond'
    | 'cross'
    | 'async'
    | 'path'
    | 'circle'
    | 'circlePlus'
    | 'ellipse'
  dashedLine?: boolean
}

const X6Edge = (props: X6EdgeProps) => {
  const graph = useContext(GraphContext)

  useEffect(() => {
    if (graph) {
      graph.addEdge({
        shape: 'edge',
        ...props,
        attrs: {
          ...(props?.attrs ?? {}),
          line: {
            targetMarker: props?.marker,
            sourceMarker: props?.marker,
            strokeDasharray: props?.dashedLine ? 5 : undefined,
            ...(props?.attrs?.line ?? {}),
          },
        },
      })
    }
  }, [graph, props])

  return null
}

export default X6Edge
