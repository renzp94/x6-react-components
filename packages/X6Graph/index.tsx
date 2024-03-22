import { EventArgs, Graph, type Options } from '@antv/x6'
import { createContext, useEffect, useRef, useState } from 'react'
import { X6ZOOM } from '../X6Tools/X6ZoomTools'
import './index.less'

export type Handler<Args> = Args extends null | undefined
  ? () => any
  : Args extends any[]
    ? (...args: Args) => any
    : (args: Args) => any

export interface Events<Name extends keyof EventArgs> {
  name: Name
  args: Handler<EventArgs[Name]>
  context?: any
  once?: boolean
}

export interface X6GraphProps extends Omit<Partial<Options.Manual>, 'grid'> {
  children?: React.ReactNode
  events?: Events<keyof EventArgs>[]
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
        ...(props ?? {}),
        grid: undefined,
      })
      props?.events?.forEach((item) => {
        const { once, name, args, context } = item
        x6Graph?.[once ? 'once' : 'on'](name, args, context)
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
