import React from 'react'
import {
  animated,
  config,
  useChain,
  useSpringRef,
  useTransition
} from 'react-spring'
import { randRGB } from '../utils/colorUtils'

export default function FlipChain({ isIntersected }: { isIntersected: boolean }): JSX.Element {
  const boxes = Array.from({ length: 16 }, () => ({ background: randRGB() }))

  const transitionRef = useSpringRef()
  const transition = useTransition(
    isIntersected ? boxes: [],
    {
      config: config.molasses,
      trail: 2000 / boxes.length,
      from: {
        opacity: 0,
        scale: 0,
        transform: 'perspective(500px) rotate3d(0, 1, 0, -180deg)'
      },
      enter: {
        opacity: 1,
        scale: 1,
        transform: 'perspective(500px) rotate3d(0, 1, 0, 0deg)'
      },
      ref: transitionRef
    }
  )

  useChain([transitionRef], [0])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '5px'
      }}
    >
      {transition((style, item) => (
        <animated.div
          className="generic-box"
          style={{ ...style, backgroundColor: item.background }}
        />
      ))}
    </div>
  )
}