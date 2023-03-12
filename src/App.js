
import { publicRoutes, privateRoutes, adminRoutes, userRoutes } from './routes/routes'
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

          {
            adminRoutes.map((route, index) => {
              const AdminPage = route.component
              return <Route key={index} path={route.path} element={<AdminPage />} />
            })
          }

          {
            userRoutes.map((route, index) => {
              const UserPage = route.component
              return <Route key={index} path={route.path} element={<UserPage />} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
