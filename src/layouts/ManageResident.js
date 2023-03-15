
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import { adminRoutes } from '../routes/routes';
import config from '../config';

function ManageResident() {
    return (
        <>
            <Workspace />

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </>
    );
}

export default ManageResident;