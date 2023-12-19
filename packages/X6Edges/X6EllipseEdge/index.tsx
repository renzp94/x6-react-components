import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6EllipseEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="ellipse" {...props} />
)

export default X6EllipseEdge
