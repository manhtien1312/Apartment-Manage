
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import { adminRoutes } from '../routes/routes';
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/ManageApartment.module.scss';

const cx = classNames.bind(styles);

function ManageApartment() {

    const handleSearch = () => {

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <>
            <Workspace >
                <h1 className={cx('title')}>Danh Sách Căn Hộ</h1>
                <Search placeholder="Tìm kiếm số căn hộ" onClick={handleSearch} onKeyDown={handleKeyPress} />
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />


        </>
    );
}

export default ManageApartment;