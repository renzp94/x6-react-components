import X6Node, { type X6NodeProps } from '../X6Node'

const X6ImageNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="image" {...props} />
)

export default X6ImageNode
