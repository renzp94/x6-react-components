import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6DiamondEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="diamond" {...props} />
)

export default X6DiamondEdge
