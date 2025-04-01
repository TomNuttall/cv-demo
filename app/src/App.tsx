import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ApolloClientProvider from './providers/apollo'
import CoveringLetter from './containers/coveringletter'
import CV from './containers/cv'
import Header from './components/header'

import './App.css'

const LINKS = [
  { name: 'CV', src: '/cv' },
  { name: 'Covering Letter', src: `/covering-letter` },
]

function App() {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({ contentRef })
  return (
    <div className="app">
      <ApolloClientProvider>
        <BrowserRouter basename="/projects/cv-template">
          <Header links={LINKS} name="C V">
            <button className="app__print" onClick={() => reactToPrintFn()}>
              Save PDF
            </button>
          </Header>

          <main id="main-content" className="app__content" ref={contentRef}>
            <style>{`@page { margin: 4rem; }`}</style>

            <Routes>
              <Route path="/" element={<Navigate to="/cv" replace={true} />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/covering-letter" element={<CoveringLetter />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ApolloClientProvider>
    </div>
  )
}

export default App
