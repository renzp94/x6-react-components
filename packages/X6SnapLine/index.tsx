import { Snapline } from '@antv/x6-plugin-snapline'
import { useContext, useEffect } from 'react'
import { GraphContext } from '../X6Graph'
import './index.less'

const X6SnapLine = (props: Snapline.Options) => {
  const graph = useContext(GraphContext)
  useEffect(() => {
    if (graph) {
      graph.use(
        new Snapline({
          enabled: true,
          className: 'react-x6-snap-line',
          ...props,
        }),
      )
    }
  }, [graph, props])

  return null
}

export default X6SnapLine
