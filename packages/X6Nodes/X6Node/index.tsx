import { useContext, useEffect } from 'react'
import { GraphContext } from '../../X6Graph'

export interface X6NodeProps {
  shape:
    | 'rect'
    | 'circle'
    | 'ellipse'
    | 'polygon'
    | 'polyline'
    | 'path'
    | 'image'
    | 'html'
  [key: string]: any
}

const X6Node = (props: X6NodeProps) => {
  const graph = useContext(GraphContext)

  useEffect(() => {
    if (graph) {
      graph.addNode({
        ...props,
      })
    }
  }, [graph, props])

  return null
}

export default X6Node
