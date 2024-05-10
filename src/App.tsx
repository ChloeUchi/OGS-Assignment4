
// import NotFound from '@components/NotFound'
import './App.css'
import { Store } from '@stores/Stores'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@components/HomePage'
import QuizPage from '@components/QuizPage'
import ScorePage from '@components/ScorePage'
import EvaluatePage from '@components/EvaluatePage'
import NavigationBar from '@components/NavigationBar'
import NotFound from '@components/NotFound'

function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className='dark:bg-[#173f67]'>
          <div className="ripple-background">
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle medium shade4"></div>
            <div className="circle small shade5"></div>
          </div>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quizpage" element={<QuizPage />} />
            <Route path="/scorepage" element={<ScorePage />} />
            <Route path="/evaluate" element={<EvaluatePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
