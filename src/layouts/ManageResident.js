
import Header from './components/Header';
import SideBar from "./components/SideBar";
import { adminRoutes } from '../routes/routes';
import config from '../config';

function ManageResident() {
    return (
        <>
            <Header to={config.routes.manage} />

            <SideBar routes={adminRoutes} />
        </>
    );
}

export default ManageResident;