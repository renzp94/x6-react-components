import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6ClassicEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="classic" {...props} />
)

export default X6ClassicEdge
