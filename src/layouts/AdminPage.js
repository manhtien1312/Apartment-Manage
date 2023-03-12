
import classNames from "classnames/bind";
import styles from '../css/AdminPage.module.scss'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { adminRoutes } from "../routes/routes";
import config from "../config";

const cx = classNames.bind(styles)

function AdminPage() {
    return (

        <>
            <Header to={config.routes.admin} />

            <SideBar routes={adminRoutes} />
        </>

    );
}

export default AdminPage;