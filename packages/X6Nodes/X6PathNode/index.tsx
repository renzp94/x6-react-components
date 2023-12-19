import X6Node, { type X6NodeProps } from '../X6Node'

const X6PathNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="path" {...props} />
)

export default X6PathNode
