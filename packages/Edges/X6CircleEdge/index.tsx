import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6CircleEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="circle" {...props} />
)

export default X6CircleEdge
