import React from 'react'
import { animated, config, useSpring } from 'react-spring'

export default function LeftToRight({ isIntersected }: { isIntersected: boolean }): JSX.Element {
  const springStyles = useSpring({
    opacity: isIntersected ? 1 : 0,
    marginLeft: isIntersected ? '0px' : '-500px',
    config: config.molasses
  })

  return (
    <animated.div
      className="blue-box"
      style={springStyles}
    >
      This is a div that should translate left to right
    </animated.div>
  )
}