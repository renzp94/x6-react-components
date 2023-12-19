import X6Grid, { type X6GridProps } from '../X6Grid'

const XDotGrid = (props: Omit<X6GridProps, 'type'>) => (
  <X6Grid type="dot" {...props} />
)

export default XDotGrid
