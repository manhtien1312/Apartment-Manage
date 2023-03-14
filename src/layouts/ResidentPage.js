
import classNames from "classnames/bind";
import styles from '../css/ResidentPage.module.scss'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { userRoutes } from "../routes/routes";
import config from "../config";

const cx = classNames.bind(styles)

function ResidentPage() {
    return (

        <>
            <Header to={config.routes.resident} />

            <SideBar routes={userRoutes} />
        </>
    );
}

export default ResidentPage;