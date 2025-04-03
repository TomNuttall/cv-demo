import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom'

import ApolloClientProvider from './providers/apollo'
import Actions from './components/actions'
import CoveringLetter from './containers/coveringletter'
import CV from './containers/cv'
import Header from './components/header'

import './App.css'

const LINKS = [
  { name: 'CV', src: '/cv' },
  { name: 'Covering Letter', src: `/covering-letter` },
]

const AppContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { search } = useLocation()

  const reactToPrintFn = useReactToPrint({ contentRef })

  const applicationId = searchParams.get('application') ?? 'demo'

  return (
    <>
      <Header links={LINKS} name="C V">
        <Actions
          onSavePdf={reactToPrintFn}
          applicationId={applicationId}
          setApplicationId={(id) => setSearchParams({ application: id })}
        />
      </Header>
      <main id="main-content" className="app__content" ref={contentRef}>
        <style>{`@page { margin: 4rem; }`}</style>

        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/cv${search}`} replace={true} />}
          />
          <Route path="/cv" element={<CV id={applicationId} />} />
          <Route
            path="/covering-letter"
            element={<CoveringLetter id={applicationId} />}
          />
        </Routes>
      </main>
    </>
  )
}

const App: React.FC = () => {
  return (
    <div className="app">
      <ApolloClientProvider>
        <BrowserRouter basename="/projects/cv-template">
          <AppContent />
        </BrowserRouter>
      </ApolloClientProvider>
    </div>
  )
}

export default App
