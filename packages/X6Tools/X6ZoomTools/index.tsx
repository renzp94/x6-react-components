import classNames from '@renzp/classes'
import { useContext, useEffect, useState } from 'react'
import { GraphContext } from '../../X6Graph'
import './index.less'

export enum X6ZOOM {
  MIN = 0.01,
  MAX = 16,
  STEP = 0.15,
  DEFAULT = 1.2,
}

export interface X6ZoomProps {
  disabled?: boolean
}

const X6ZoomTools = (props?: X6ZoomProps) => {
  const { disabled } = props ?? {}
  const [zoom, setZoom] = useState({
    factor: X6ZOOM.DEFAULT,
    value: X6ZOOM.DEFAULT,
    min: X6ZOOM.MIN,
    max: X6ZOOM.MAX,
  })

  const graph = useContext(GraphContext)
  useEffect(() => {
    if (graph) {
      const factor = graph.zoom()
      const { min, max } = graph.options.scaling ?? {
        min: X6ZOOM.MIN,
        max: X6ZOOM.MAX,
      }
      graph.on('scale', ({ sx }: { sx: number }) =>
        setZoom((v) => ({ ...v, value: sx })),
      )
      setZoom({
        factor,
        value: factor,
        min: min ?? X6ZOOM.MIN,
        max: max ?? X6ZOOM.MAX,
      })
    }
  }, [graph])

  const onPlus = () => {
    if (!disabled) {
      setZoom((v) => {
        const value = v.value + X6ZOOM.STEP
        const max = v.max ?? X6ZOOM.MAX
        const zoom = value > max ? max : value
        graph?.zoomTo(zoom)
        return { ...v, zoom }
      })
    }
  }

  const onMinus = () => {
    if (!disabled) {
      setZoom((v) => {
        const value = v.value - X6ZOOM.STEP
        const min = v.min ?? X6ZOOM.MIN
        const zoom = value < min ? min : value
        graph?.zoomTo(zoom)
        return { ...v, zoom }
      })
    }
  }

  const onReset = () => {
    if (!disabled) {
      const factor = zoom.factor ?? X6ZOOM.DEFAULT
      setZoom((v) => ({ ...v, zoom: factor }))
      graph?.zoomTo(factor)
      graph?.centerContent()
    }
  }

  return (
    <div className="react-x6-graph-zoom">
      <i
        title="放大"
        className={classNames([
          'ri-zoom-in-line',
          'react-x6-graph-zoom-icon',
          {
            ['react-x6-graph-zoom-icon--disabled']:
              disabled || zoom.value === X6ZOOM.MAX,
          },
        ])}
        onClick={onPlus}
      />
      <i
        title="缩小"
        className={classNames([
          'ri-zoom-out-line',
          'react-x6-graph-zoom-icon',
          {
            ['react-x6-graph-zoom-icon--disabled']:
              disabled || zoom.value === X6ZOOM.MIN,
          },
        ])}
        onClick={onMinus}
      />
      <i
        title="还原"
        className={classNames([
          'ri-refresh-line',
          'react-x6-graph-zoom-icon',
          {
            ['react-x6-graph-zoom-icon--disabled']:
              disabled || zoom.value === zoom.factor,
          },
        ])}
        onClick={onReset}
      />
    </div>
  )
}

export default X6ZoomTools
