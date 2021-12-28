import React from 'react'
import Container from './components/Container'
import Header from './components/Header'
import FadeIn from './components/FadeIn'
import LeftToRight from './components/LeftToRight'
import Tilt from './components/Tilt'

function App() {
  return (
    <div>
      <Header />
      <Container 
        threshold={.75} 
        render={({ isIntersected }) => <FadeIn isIntersected={isIntersected} />} 
      />
      <Container 
        threshold={.75} 
        render={({ isIntersected }) => <FadeIn isIntersected={isIntersected} />} 
      />
      <Container 
        threshold={.75} 
        render={({ isIntersected }) => <LeftToRight isIntersected={isIntersected} />} 
      />
      <Container 
        threshold={.75} 
        render={({ isIntersected }) => <Tilt isIntersected={isIntersected} />} 
      />
    </div>
  )
}

export default App
