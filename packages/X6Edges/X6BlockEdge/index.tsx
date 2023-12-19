import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6BlockEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="block" {...props} />
)

export default X6BlockEdge
