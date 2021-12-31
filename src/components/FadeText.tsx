import React, { PropsWithChildren } from 'react'
import { animated, useTrail } from 'react-spring'

interface FadeTextProps {
  isIntersected: boolean
}

export function FadeText({ isIntersected, children }: PropsWithChildren<FadeTextProps>): JSX.Element {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: {
      mass: 5,
      tension: 1000,
      friction: 400
    },
    transform: isIntersected
      ? 'perspective(500px) rotate3d(1, 0, 0, 0deg)'
      : 'perspective(500px) rotate3d(1, 0, 0, -90deg)',
    color: isIntersected ? '#000' : '#ff0000',
    opacity: isIntersected ? 1 : 0,
    height: isIntersected ? '30px' : '0px'
  })

  return (
    <div>
      {trail.map((style, index) => (
        <animated.div
          key={index}
          style={{
            height: '30px',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          <animated.div style={style}>
            {items[index]}
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default function FadeTextExample({ isIntersected }: { isIntersected: boolean }): JSX.Element {
  return (
    <FadeText isIntersected={isIntersected}>
      <span>The</span>
      <span>Most</span>
      <span>Wonderful</span>
      <span>Time</span>
    </FadeText>
  )
}
