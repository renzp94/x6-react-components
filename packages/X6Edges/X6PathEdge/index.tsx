import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6PathEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="path" {...props} />
)

export default X6PathEdge
