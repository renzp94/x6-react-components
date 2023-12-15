import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6AsyncEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="async" {...props} />
)

export default X6AsyncEdge
