
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import { userRoutes } from "../routes/routes";
import config from '../config';


function ResidentService() {
    return (
        <>
            <Workspace />

            <Header to={config.routes.resident} />

            <SideBar routes={userRoutes} />
        </>
    );
}

export default ResidentService;