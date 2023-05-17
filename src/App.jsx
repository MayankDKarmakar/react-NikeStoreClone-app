import React from 'react'
import { Cart, FlexContent, Footer, Hero, NavBar, Sales, Stories } from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'

const App = () => {
  return (
    <>
    <NavBar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
    <Hero heroapi={heroapi} />
    <Sales salesData={popularsales} ifExists />
    <FlexContent salesData={highlight} ifExists />
    <Sales salesData={toprateslaes} />
    <FlexContent salesData={sneaker}/>
    <Stories story={story}/>
    </main>
    <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App