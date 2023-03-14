
import Header from './components/Header';
import SideBar from "./components/SideBar";
import { userRoutes } from "../routes/routes";
import config from '../config';

function ResidentApartment() {
    return (
        <>
            <Header to={config.routes.resident} />

            <SideBar routes={userRoutes} />
        </>
    );
}

export default ResidentApartment;