
import config from '../config'
import HomePage from '../layouts/HomePage';
import AdminPage from '../layouts/AdminPage';
import UserPage from '../layouts/UserPage';
import Login from '../layouts/components/Login';
import AdApartment from '../layouts/components/AdApartment'
import Resident from '../layouts/components/Resident'
import Employee from '../layouts/components/Employee'
import AdService from '../layouts/components/AdService'
import UsApartment from '../layouts/components/UsApartment'
import UsService from '../layouts/components/UsService'

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.login, component: Login },

]

const privateRoutes = [
    { path: config.routes.admin, component: AdminPage },
    { path: config.routes.user, component: UserPage },
]

const adminRoutes = [
    { title: 'Quản lý mặt bằng', path: config.routes.adApartment, component: AdApartment },
    { title: 'Quản lý cư dân', path: config.routes.resident, component: Resident },
    { title: 'Quản lý nhân viên', path: config.routes.employee, component: Employee },
    { title: 'Quản lý dịch vụ', path: config.routes.adService, component: AdService },
]

const userRoutes = [
    { title: 'Thông tin căn hộ', path: config.routes.usApartment, component: UsApartment },
    { title: 'Hóa đơn dịch vụ', path: config.routes.usService, component: UsService },
]


export { publicRoutes, privateRoutes, adminRoutes, userRoutes }