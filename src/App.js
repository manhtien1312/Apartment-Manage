
import { publicRoutes, privateRoutes, adminRoutes, userRoutes } from './routes/routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './layouts/components/PrivateRoute';

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
              return <Route key={index} path={route.path} element={<PrivateRoute><PrivatePage /></PrivateRoute>} />
            })
          }

          {
            adminRoutes.map((route, index) => {
              const ManagePage = route.component
              return <Route key={index} path={route.path} element={<PrivateRoute><ManagePage /></PrivateRoute>} />
            })
          }

          {
            userRoutes.map((route, index) => {
              const ResidentPage = route.component
              return <Route key={index} path={route.path} element={<PrivateRoute><ResidentPage /></PrivateRoute>} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
