import classNames from '@renzp/classes'
import { useContext, useEffect, useState } from 'react'
import { GraphContext } from '../X6Graph'
import './index.less'

export enum X6ZOOM {
  MIN = 0.1,
  MAX = 2,
  STEP = 0.15,
  DEFAULT = 1,
}

const X6Zoom = () => {
  const [zoom, setZoom] = useState(X6ZOOM.DEFAULT)
  const graph = useContext(GraphContext)
  useEffect(() => {
    if (graph) {
      const value = graph.zoom()
      graph.on('scale', ({ sx }: { sx: number }) => setZoom(sx))
      setZoom(value)
    }
  }, [graph])

  const onPlus = () => {
    setZoom((v) => {
      const value = v + X6ZOOM.STEP
      const max = graph?.options.scaling.max ?? X6ZOOM.MAX
      const zoom = value > max ? max : value
      graph?.zoomTo(zoom)
      return zoom
    })
  }

  const onMinus = () => {
    setZoom((v) => {
      const value = v - X6ZOOM.STEP
      const min = graph?.options.scaling.min ?? X6ZOOM.MIN
      const zoom = value < min ? min : value
      graph?.zoomTo(zoom)
      return zoom
    })
  }

  const onReset = () => {
    setZoom(X6ZOOM.DEFAULT)
    graph?.zoomTo(X6ZOOM.DEFAULT)
  }

  return (
    <div className="react-x6-graph-zoom">
      <i
        title="放大"
        className={classNames([
          'ri-zoom-in-line',
          'react-x6-graph-zoom-icon',
          { ['react-x6-graph-zoom-icon--disabled']: zoom === X6ZOOM.MAX },
        ])}
        onClick={onPlus}
      />
      <i
        title="缩小"
        className={classNames([
          'ri-zoom-out-line',
          'react-x6-graph-zoom-icon',
          { ['react-x6-graph-zoom-icon--disabled']: zoom === X6ZOOM.MIN },
        ])}
        onClick={onMinus}
      />
      <i
        title="还原"
        className={classNames([
          'ri-refresh-line',
          'react-x6-graph-zoom-icon',
          { ['react-x6-graph-zoom-icon--disabled']: zoom === X6ZOOM.DEFAULT },
        ])}
        onClick={onReset}
      />
    </div>
  )
}

export default X6Zoom
