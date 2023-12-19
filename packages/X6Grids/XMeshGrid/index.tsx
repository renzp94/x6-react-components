import X6Grid, { type X6GridProps } from '../X6Grid'

const XMeshGrid = (props: Omit<X6GridProps, 'type'>) => (
  <X6Grid type="mesh" {...props} />
)

export default XMeshGrid
