import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6CrossEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="cross" {...props} />
)

export default X6CrossEdge
