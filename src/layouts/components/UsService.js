
import Header from './Header';
import SideBar from "./SideBar";
import { userRoutes } from "../../routes/routes";
import config from '../../config';


function UsService() {
    return (
        <>
            <Header to={config.routes.user} />

            <SideBar routes={userRoutes} />
        </>
    );
}

export default UsService;