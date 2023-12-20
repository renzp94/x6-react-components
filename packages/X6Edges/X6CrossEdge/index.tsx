import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6CrossEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="cross" {...props} />
)

export default X6CrossEdge
