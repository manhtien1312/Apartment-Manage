
import config from '../config'
import HomePage from '../layouts/HomePage';
import ManagePage from '../layouts/ManagePage';
import ResidentPage from '../layouts/ResidentPage';
import Login from '../layouts/components/Login';
import Forgot from '../layouts/components/Forgot';
import ChangePassword from '../layouts/components/ChangePassword';
import ManageApartment from '../layouts/ManageApartment'
import ManageResident from '../layouts/ManageResident'
import ManageEmployee from '../layouts/ManageEmployee'
import ManageService from '../layouts/ManageService'
import BillDetail from '../layouts/components/BillDetail';
import ResidentApartment from '../layouts/ResidentApartment'
import ResidentService from '../layouts/ResidentService'

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.login, component: Login },
    { path: config.routes.forgot, component: Forgot },

]

const privateRoutes = [
    { path: config.routes.manage, component: ManagePage },
    { path: config.routes.resident, component: ResidentPage },
    { path: config.routes.changePassword, component: ChangePassword },
    { path: config.routes.billDetail, component: BillDetail },
]

const adminRoutes = [
    { title: 'Quản lý căn hộ', path: config.routes.manageApartment, component: ManageApartment },
    { title: 'Quản lý cư dân', path: config.routes.manageResident, component: ManageResident },
    { title: 'Quản lý nhân viên', path: config.routes.manageEmployee, component: ManageEmployee },
    { title: 'Quản lý hóa đơn', path: config.routes.manageService, component: ManageService },
]

const userRoutes = [
    { title: 'Thông tin căn hộ', path: config.routes.residentApartment, component: ResidentApartment },
    { title: 'Hóa đơn dịch vụ', path: config.routes.residentService, component: ResidentService },
]


export { publicRoutes, privateRoutes, adminRoutes, userRoutes }