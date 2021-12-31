import React from 'react'
import { animated, useSprings } from 'react-spring'
import { useHover } from 'react-use-gesture'

export default function HoverFlip({ isIntersected }: { isIntersected: boolean }): JSX.Element {
  const boxes = [
    { id: '2s', img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/2S.svg' },
    { id: '3s', img: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/3S.svg' },
    { id: '4s', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/4S.svg' },
    { id: '5s', img: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/5S.svg' },
    { id: '6s', img: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/6S.svg' },
    { id: '7s', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/7S.svg' },
    { id: '8s', img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/8S.svg' },
    { id: '9s', img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/9S.svg' },
    { id: '10s', img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/10S.svg' },
    { id: 'Js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/JS.svg' },
    { id: 'Qs', img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/QS.svg' },
    { id: 'Ks', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/KS.svg' },
    { id: 'As', img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Aceofspades.svg' },
    { id: '2h', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/2H.svg' },
    { id: '3h', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/3H.svg' },
    { id: '4h', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/4H.svg' }
  ]

  const [springs, api] = useSprings(
    boxes.length,
    () => ({
      opacity: 0,
      transform: 'perspective(500px) rotate3d(0, 1, 0, 180deg)'
    })
  )

  const bind = useHover(({ hovering, args: [index] }) => {
    api.start((i) => {
      if(i === index) {
        return {
          opacity: hovering ? 1 : 0,
          transform: hovering
            ? 'perspective(500px) rotate3d(0, 1, 0, 0deg)'
            : 'perspective(500px) rotate3d(0, 1, 0, 180deg)'
        }
      }
    })
  })

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '10px',
        margin: '10px'
      }}
    >
      {springs.map((style, index) => (
        <div
          key={index}
          style={{ boxShadow: '2px 2px 10px #ccc, 2px -2px 5px #ccc' }}
          {...bind(index)}
        >
          <animated.img
            src={boxes[index].img}
            style={{
              ...style,
              height: '150px',
              width: '100px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      ))}
    </div>
  )
}