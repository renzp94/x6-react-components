import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6ClassicEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="classic" {...props} />
)

export default X6ClassicEdge
