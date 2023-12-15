import X6Node, { type X6NodeProps } from '../X6Node'

const X6EllipseNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="ellipse" {...props} />
)

export default X6EllipseNode
