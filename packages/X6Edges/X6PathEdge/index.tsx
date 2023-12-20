import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6PathEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="path" {...props} />
)

export default X6PathEdge
