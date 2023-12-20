import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6CircleEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="circle" {...props} />
)

export default X6CircleEdge
