import X6Grid, { type X6GridProps } from '../X6Grid'

const XDoubleMeshGrid = (props: Omit<X6GridProps, 'type'>) => (
  <X6Grid type="doubleMesh" {...props} />
)

export default XDoubleMeshGrid
