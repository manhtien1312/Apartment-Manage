
import { useState } from 'react';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import Table from './components/Table';
import PopupModal from './components/PopupModal';
import CreateBill from "./components/CreateBill"
import { adminRoutes } from '../routes/routes';
import config from '../config';

import classNames from 'classnames/bind';
import styles from "../css/Manage.module.scss"
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ManageService() {

    const listHead = ["Số căn hộ", "Hóa đơn gần nhất", "Tình trạng"]
    const listRow = [
        { houseNum: "A0803", billName: "Tháng 3", status: "Đã thanh toán" },
        { houseNum: "A0804", billName: "Tháng 3", status: "Đã thanh toán" },
        { houseNum: "A0805", billName: "Tháng 3", status: "Đã thanh toán" },
    ]

    const handleSearch = () => {

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className={cx('container')}>
            <Workspace>
                <h1 className={cx('title')}>Danh Sách hóa đơn dịch vụ</h1>
                <Search onClick={handleSearch} onKeyDown={handleKeyPress} />
                <Table listHead={listHead}>
                    {
                        listRow.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.houseNum}</td>
                                    <td><Link to={config.routes.billDetail}>{row.billName}</Link></td>
                                    <td>{row.status}</td>
                                    <td><button onClick={toggleModal}>Tạo hóa đơn</button></td>
                                </tr>
                            )
                        })
                    }
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<CreateBill onClick={toggleModal} />} />
                }

            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </div>
    );
}

export default ManageService;