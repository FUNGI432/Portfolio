import './App.css'
import LoadingScreen from './LoadingScreen'
import { useState, lazy, Suspense } from 'react'
import { useMediaQuery } from './hooks/useMediaQuery'

// Code split layouts to ensure zero overhead on mobile/PC
const DesktopLayout = lazy(() => import('./layouts/DesktopLayout'))
const MobileLayout = lazy(() => import('./layouts/MobileLayout'))

function App() {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 428px)');

  return (
    <>
      <LoadingScreen onFinished={() => setLoading(false)} />
      
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
        <Suspense fallback={<div style={{ background: '#000', minHeight: '100svh' }} />}>
          {isMobile ? (
            <MobileLayout />
          ) : (
            <DesktopLayout />
          )}
        </Suspense>
      </div>
    </>
  )
}

export default App
