import X6Node, { type X6NodeProps } from '../X6Node'

const X6HTMLNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="html" {...props} />
)

export default X6HTMLNode
