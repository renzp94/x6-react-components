import { Edge } from '@antv/x6'
import { useContext, useEffect } from 'react'
import { GraphContext } from '../../X6Graph'

export interface X6EdgeProps {
  sourceMarker:
    | 'block'
    | 'classic'
    | 'diamond'
    | 'cross'
    | 'async'
    | 'path'
    | 'circle'
    | 'circlePlus'
    | 'ellipse'
  source?: Edge.TerminalData
  target?: Edge.TerminalData
  [key: string]: any
}

const X6Edge = (props: X6EdgeProps) => {
  const graph = useContext(GraphContext)

  useEffect(() => {
    if (graph) {
      graph.addEdge({
        shape: 'edge',
        ...props,
      })
    }
  }, [graph, props])

  return null
}

export default X6Edge
