
import HomePage from '../layouts/HomePage';
import AdminPage from '../layouts/AdminPage';
import UserPage from '../layouts/UserPage';
import Login from '../layouts/components/Login';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },

]

const privateRoutes = [
    { path: '/admin', component: AdminPage },
    { path: '/user', component: UserPage },
]

export { publicRoutes, privateRoutes }