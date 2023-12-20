import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6DiamondEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge marker="diamond" {...props} />
)

export default X6DiamondEdge
