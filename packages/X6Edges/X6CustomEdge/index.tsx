import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6CustomEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge {...props} />
)

export default X6CustomEdge
