
import Header from './Header';
import SideBar from "./SideBar";
import { userRoutes } from "../../routes/routes";
import config from '../../config';

function UsApartment() {
    return (
        <>
            <Header to={config.routes.user} />

            <SideBar routes={userRoutes} />
        </>
    );
}

export default UsApartment;