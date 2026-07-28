import Home from './pages/Home.jsx'
import Preloader from './components/Preloader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'

function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Home />
      <BackToTop />
    </>
  )
}

export default App
