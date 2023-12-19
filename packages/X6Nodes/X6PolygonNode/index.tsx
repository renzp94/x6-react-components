import X6Node, { type X6NodeProps } from '../X6Node'

const X6PolygonNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="polygon" {...props} />
)

export default X6PolygonNode
