
import { publicRoutes, privateRoutes } from './routes/routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const PublicPage = route.component
              return <Route key={index} path={route.path} element={<PublicPage />} />
            })
          }

          {
            privateRoutes.map((route, index) => {
              const PrivatePage = route.component
              return <Route key={index} path={route.path} element={<PrivatePage />} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
