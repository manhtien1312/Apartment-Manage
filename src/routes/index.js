
import HomePage from '../layouts/HomePage';
import AdminPage from '../layouts/AdminPage';
import UserPage from '../layouts/UserPage';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/adminPage', component: AdminPage },
    { path: '/userPage', component: UserPage },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }