
import classNames from "classnames/bind";
import styles from '../css/UserPage.module.scss'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { userRoutes } from "../routes/routes";
import config from "../config";

const cx = classNames.bind(styles)

function UserPage() {
    return (

        <>
            <Header to={config.routes.user} />

            <SideBar routes={userRoutes} />
        </>
    );
}

export default UserPage;