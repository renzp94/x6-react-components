import { register } from '@antv/x6-react-shape'
import { useContext, useEffect } from 'react'

import { GraphContext } from '../../X6Graph'
import { X6NodeProps } from '../X6Node'
import X6ReactComponent from './X6ReactComponent'

register({
  shape: 'x6-react-node',
  component: X6ReactComponent as any,
})

export interface X6ReactNodeProps extends Omit<X6NodeProps, 'shape'> {
  shape?: string
  children?: React.ReactNode
}

export const REACT_COMPONENT = Symbol('reactComponent')

export type X6ReactComponentNode = Node & { [REACT_COMPONENT]: React.ReactNode }

const X6ReactNode = ({
  shape = 'x6-react-node',
  children,
  ...otherProps
}: X6ReactNodeProps) => {
  const graph = useContext(GraphContext)

  useEffect(() => {
    if (graph) {
      const node = graph.addNode({
        shape,
        ...otherProps,
      }) as unknown as X6ReactComponentNode
      node[REACT_COMPONENT] = children
    }
  }, [graph, otherProps, shape, children])

  return null
}

export default X6ReactNode
