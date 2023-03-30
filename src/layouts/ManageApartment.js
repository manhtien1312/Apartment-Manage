
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import { adminRoutes } from '../routes/routes';
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/Manage.module.scss';
import Table from './components/Table';

const cx = classNames.bind(styles);

function ManageApartment() {

    // Lấy thông tin từ BE
    const listHead = ["Số căn hộ", "Diện tích (m2)", "Số phòng", "Tình trạng", "Chủ hộ"]
    const listRow = [
        { num: "A0803", area: 80, rooms: 5, status: "Đã bán", owner: "Nguyễn Văn An" },
        { num: "A0804", area: 70, rooms: 4, status: "Chưa bàn giao", owner: "" },
        { num: "A0805", area: 70, rooms: 4, status: "Đã thuê", owner: "Bùi Thị Xuân" },
    ]

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
                <Table listHead={listHead}>
                    {
                        listRow.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.num}</td>
                                    <td>{row.area}</td>
                                    <td>{row.rooms}</td>
                                    <td>{row.status}</td>
                                    <td>{row.owner}</td>
                                    <td><button>Thay đổi</button></td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />


        </>
    );
}

export default ManageApartment;