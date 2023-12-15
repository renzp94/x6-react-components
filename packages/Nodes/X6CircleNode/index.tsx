import X6Node, { type X6NodeProps } from '../X6Node'

const X6CircleNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="circle" {...props} />
)

export default X6CircleNode
