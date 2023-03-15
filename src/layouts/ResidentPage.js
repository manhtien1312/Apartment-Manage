
import classNames from "classnames/bind";
import styles from '../css/ResidentPage.module.scss'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Workspace from "./components/Workspace";
import { userRoutes } from "../routes/routes";
import config from "../config";

const cx = classNames.bind(styles)

function ResidentPage() {
    return (

        <>
            <Workspace />

            <SideBar routes={userRoutes} />

            <Header to={config.routes.resident} />

        </>
    );
}

export default ResidentPage;