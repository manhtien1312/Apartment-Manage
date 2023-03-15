
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import { userRoutes } from "../routes/routes";
import config from '../config';

function ResidentApartment() {
    return (
        <>
            <Workspace />

            <SideBar routes={userRoutes} />

            <Header to={config.routes.resident} />

        </>
    );
}

export default ResidentApartment;