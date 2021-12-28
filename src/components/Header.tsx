import React from 'react'

export default function Header(): JSX.Element {
  return (
    <header 
      style={{ 
        padding: '10px', 
        borderBottom: '1px solid #cccccc',
        color: 'white',
        backgroundColor: 'cornflowerblue'
        }}
      >
      <h1>Scroll Animation</h1>
    </header>
  )
}