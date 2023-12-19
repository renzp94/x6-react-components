import { Graph, type Options } from '@antv/x6'
import { createContext, useEffect, useRef, useState } from 'react'
import { X6ZOOM } from '../X6ZoomTools'
import './index.less'

export interface X6GraphProps extends Partial<Options.Manual> {
  children?: React.ReactNode
  onMount?: (graph: Graph) => void
}

export const GraphContext = createContext<Graph | undefined>(undefined)

const X6Graph = (props: X6GraphProps) => {
  const rootEl = useRef<HTMLDivElement>(null)
  const [graph, setGraph] = useState<Graph>()

  useEffect(() => {
    if (rootEl.current) {
      const autoResize = props?.autoResize ?? true
      const panning = props?.panning ?? true
      const scaling = props?.scaling ?? { min: X6ZOOM.MIN, max: X6ZOOM.MAX }
      const mousewheel = props?.mousewheel ?? {
        enabled: true,
        factor: X6ZOOM.DEFAULT,
      }

      const x6Graph = new Graph({
        container: rootEl.current,
        autoResize,
        mousewheel,
        panning,
        scaling,
        grid: {
          visible: true,
        },
        ...(props ?? {}),
      })

      setGraph((v) => {
        if (x6Graph && !v) {
          props?.onMount?.(x6Graph)
        }
        return x6Graph
      })
    }
  }, [props])

  return (
    <GraphContext.Provider value={graph}>
      <div className="react-x6-graph">
        <div className="react-x6-graph-root" ref={rootEl}></div>
        {props?.children}
      </div>
    </GraphContext.Provider>
  )
}

export default X6Graph
