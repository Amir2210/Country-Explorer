import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider, } from 'react-query'
import AppContext from './AppContext/AppContext.tsx'
import FlagDetail from './pages/FlagDetail.tsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:countryName' element={<FlagDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </AppContext>
)
