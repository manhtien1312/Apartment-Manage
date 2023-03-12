
import Header from './Header';
import SideBar from "./SideBar";
import { adminRoutes } from "../../routes/routes";
import config from '../../config';

function Employee() {
    return (
        <>
            <Header to={config.routes.admin} />

            <SideBar routes={adminRoutes} />
        </>
    );
}

export default Employee;