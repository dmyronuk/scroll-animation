import React from 'react'
import { animated, config, useSpring } from 'react-spring'

export default function Tilt({ isIntersected }: { isIntersected: boolean }): JSX.Element {
  const springStyles = useSpring({
    opacity: isIntersected ? 1 : 0,
    transform: isIntersected 
      ? 'perspective(500px) rotate3d(0, 0, 0, 0deg)' 
      : 'perspective(500px) rotate3d(0, 1, 0, 30deg)',
    config: config.molasses
  })

  return (
    <animated.div
      className="blue-box"
      style={springStyles}
    >
      This is a div that should tilt
    </animated.div>
  )
}