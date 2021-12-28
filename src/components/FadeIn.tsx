import React from 'react'
import { animated, config, useSpring } from 'react-spring'

export default function FadeIn({ isIntersected }: { isIntersected: boolean }): JSX.Element {
  const springStyles = useSpring({
    opacity: isIntersected ? 1 : 0,
    delay: 500,
    config: config.molasses
  })

  return (
    <animated.div
      className="blue-box"
      style={springStyles}
    >
      This is a div that should fade-in
    </animated.div>
  )
}