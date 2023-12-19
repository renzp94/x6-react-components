import X6Grid, { type X6GridProps } from '../X6Grid'

const XFixedDotGrid = (props: Omit<X6GridProps, 'type'>) => (
  <X6Grid type="fixedDot" {...props} />
)

export default XFixedDotGrid
