import { Graph } from '@antv/x6'
import { useRef } from 'react'
import {
  X6CircleNode,
  X6Graph,
  X6ImageEdge,
  X6RectNode,
  X6SnapLine,
  X6ZoomTools,
  XDotGrid,
} from '../packages'
import ArrowImg from './assets/arrow.png'

const App = () => {
  const ref = useRef<Graph | undefined>()
  const nodes = Array.from({ length: 10 }).map((_, i: number) => {
    return {
      id: `node_${i}`,
      name: `Node-${i + 1}`,
      x: 200 * (i + 1),
      y: 400,
      type: i % 2 ? 'rect' : 'circle',
    }
  })

  const edges = nodes.reduce((prev: Array<any>, curr, i: number) => {
    let source = ''
    let target = ''

    if (i < nodes.length - 1) {
      const nextTarget = nodes[i + 1]
      source = curr.id
      target = nextTarget.id
    } else {
      return prev
    }
    return [...prev, { source, target }]
  }, [])

  const x6Data: any = { nodes, edges }

  const onMount = (graph: Graph) => {
    ref.current = graph
  }

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <X6Graph onMount={onMount}>
        <XDotGrid />
        <X6ZoomTools />
        <X6SnapLine />
        {x6Data.nodes.map((item: any) => {
          return item.type === 'rect' ? (
            <X6RectNode
              key={item.id}
              zIndex={10}
              height={100}
              width={100}
              id={item.id}
              x={item.x}
              y={item.y}
              label={item.name}
            />
          ) : (
            <X6CircleNode
              key={item.id}
              zIndex={10}
              height={100}
              width={100}
              id={item.id}
              x={item.x}
              y={item.y}
              label={item.name}
            />
          )
        })}
        {x6Data.edges.map((item: any, i: number) => {
          return (
            <X6ImageEdge
              {...item}
              size={32}
              isRenderSourceMarker={false}
              image={ArrowImg}
              dashedLine
              key={`edge_${i}`}
            />
          )
        })}
      </X6Graph>
      {}
    </div>
  )
}

export default App
