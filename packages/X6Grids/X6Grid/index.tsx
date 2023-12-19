import { useContext, useEffect } from 'react'
import { GraphContext } from '../../X6Graph'

export interface X6GridArg {
  color: string
  thickness: number
  [key: string]: any
}

export interface X6GridProps {
  type: 'dot' | 'fixedDot' | 'mesh' | 'doubleMesh'
  size?: number
  args?: X6GridArg[] | X6GridArg
}

const X6Grid = (props: X6GridProps) => {
  const graph = useContext(GraphContext)

  useEffect(() => {
    if (graph) {
      if (graph.options?.grid?.visible) {
        graph.hideGrid()
        graph.clearGrid()
      } else {
        graph.showGrid()
      }

      if (props?.size) {
        graph.setGridSize(props.size)
      }
      graph.drawGrid(props)
    }
  }, [graph, props])

  return null
}

export default X6Grid
