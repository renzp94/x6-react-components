import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6CirclePlusEdge = (props: Omit<X6EdgeProps, 'sourceMarker'>) => (
  <X6Edge sourceMarker="circlePlus" {...props} />
)

export default X6CirclePlusEdge
