import X6Node, { type X6NodeProps } from '../X6Node'

const X6PolylineNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="polyline" {...props} />
)

export default X6PolylineNode
