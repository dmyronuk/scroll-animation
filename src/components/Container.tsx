import React, { useCallback, useEffect, useRef, useState } from 'react'

interface ContainerProps {
  render: (props: { isIntersected: boolean}) => JSX.Element
  threshold: number
}

export default function Container({ render, threshold }: ContainerProps): JSX.Element {
  const [isIntersected, setIsIntersected] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    if(entries.some(entry => entry.isIntersecting)) {
      setIsIntersected(true)
    }
  }, [setIsIntersected])

  useEffect(() => {
    if(!observer.current) {
      observer.current = new IntersectionObserver(observerCallback, { threshold })
    }
  }, [observer, observerCallback, threshold])

  useEffect(() => {
    if(observer.current && containerRef.current) {
      observer.current.observe(containerRef.current)
    }
  }, [observer, containerRef])

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px',
        backgroundColor: '#eeeeee',
        borderBottom: '1px solid #cccccc'
      }}
    >
      {render({ isIntersected })}
    </div>
  )
}