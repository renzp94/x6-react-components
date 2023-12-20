import X6Edge, { type X6EdgeProps } from '../X6Edge'

const X6BlockEdge = (props: Omit<X6EdgeProps, 'marker'>) => (
  <X6Edge
    marker="block"
    attrs={{
      line: {
        sourceMarker: null,
        ...(props?.attrs?.line ?? {}),
      },
    }}
    {...props}
  />
)

export default X6BlockEdge
