import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6EllipseEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="ellipse" {...props} />
)

export default X6EllipseEdge
