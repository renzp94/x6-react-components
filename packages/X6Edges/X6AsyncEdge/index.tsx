import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6AsyncEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="async" {...props} />
)

export default X6AsyncEdge
