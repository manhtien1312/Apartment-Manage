
import classNames from "classnames/bind";
import styles from '../css/Manage.module.scss'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Workspace from "./components/Workspace";
import { adminRoutes } from "../routes/routes";
import config from "../config";

const cx = classNames.bind(styles)

function ManagePage() {
    return (

        <div className={cx('container')}>
            <Workspace>
                <h1 className={cx('title')}>Thông báo</h1>
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </div>

    );
}

export default ManagePage;