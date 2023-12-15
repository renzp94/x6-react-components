import { Graph } from '@antv/x6'
import { createContext, useEffect, useRef, useState } from 'react'
import { X6ZOOM } from '../X6Zoom'
import './index.less'

export interface GraphProps {
  height?: number
  width?: number
  scaling?: { min?: number; max?: number }
  autoResize?: boolean
  panning?: boolean
  mousewheel?: boolean
  children?: React.ReactNode
}

export const GraphContext = createContext<Graph | undefined>(undefined)

const ReactGraph = (props: GraphProps) => {
  const rootEl = useRef<HTMLDivElement>(null)
  const [graph, setGraph] = useState<Graph>()
  const autoResize = props?.autoResize ?? true
  const panning = props?.panning ?? true
  const mousewheel = props?.mousewheel ?? true

  useEffect(() => {
    if (rootEl.current) {
      const scaling = props?.scaling ?? { min: X6ZOOM.MIN, max: X6ZOOM.MAX }

      const x6Graph = new Graph({
        container: rootEl.current,
        autoResize,
        panning,
        mousewheel,
        scaling,
        grid: {
          visible: true,
        },
        ...(props ?? {}),
      })
      setGraph(x6Graph)
    }
  }, [autoResize, mousewheel, panning, props])

  return (
    <GraphContext.Provider value={graph}>
      <div className="react-x6-graph">
        <div className="react-x6-graph-root" ref={rootEl}></div>
        {props?.children}
      </div>
    </GraphContext.Provider>
  )
}

export default ReactGraph
