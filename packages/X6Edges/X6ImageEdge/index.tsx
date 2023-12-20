import X6Edge, { type X6EdgeProps } from '../X6Edge'

export interface X6BImageEdgeProps extends Omit<X6EdgeProps, 'marker'> {
  image: string
  size?: number
  isRenderSourceMarker?: boolean
}

const X6BImageEdge = (props: X6BImageEdgeProps) => {
  const {
    isRenderSourceMarker = true,
    size = 24,
    image,
    ...restProps
  } = props ?? {}

  const marker = {
    tagName: 'image',
    'xlink:href': image,
    width: size,
    height: size,
    x: 0,
    y: -(size / 2),
  }

  return (
    <X6Edge
      attrs={{
        line: {
          sourceMarker: isRenderSourceMarker ? marker : undefined,
          targetMarker: marker,
        },
      }}
      {...restProps}
    />
  )
}

export default X6BImageEdge
