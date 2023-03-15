
import classNames from "classnames/bind";
import styles from '../css/ManagePage.module.scss'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Workspace from "./components/Workspace";
import { adminRoutes } from "../routes/routes";
import config from "../config";

const cx = classNames.bind(styles)

function ManagePage() {
    return (

        <>
            <Workspace />

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </>

    );
}

export default ManagePage;