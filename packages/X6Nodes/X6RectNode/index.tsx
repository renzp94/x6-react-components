import X6Node, { X6NodeProps } from '../X6Node'

const X6RectNode = (props: Omit<X6NodeProps, 'shape'>) => (
  <X6Node shape="rect" {...props} />
)

export default X6RectNode
