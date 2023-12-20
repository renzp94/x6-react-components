import { Node } from '@antv/x6'
import { useContext, useEffect } from 'react'
import { GraphContext } from '../../X6Graph'

export interface X6NodeProps extends Node.Metadata {
  shape:
    | 'rect'
    | 'circle'
    | 'ellipse'
    | 'polygon'
    | 'polyline'
    | 'path'
    | 'image'
    | 'html'
}

const X6Node = (props: X6NodeProps) => {
  const graph = useContext(GraphContext)

  useEffect(() => {
    if (graph) {
      graph.addNode(props)
    }
  }, [graph, props])

  return null
}

export default X6Node
