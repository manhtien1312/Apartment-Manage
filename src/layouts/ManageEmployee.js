
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import Table from './components/Table';
import { adminRoutes } from '../routes/routes';
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/Manage.module.scss'

const cx = classNames.bind(styles);

function ManageEmployee() {

    //Lấy thông tin từ BE
    const listHead = ["Tên", "Giới tính", "Ngày sinh", "Địa chỉ", "Số điện thoại", "Vị trí"]
    const listRow = [
        { name: "Nguyễn Văn An", gender: "Nam", doB: '1/1/1990', address: "Hà Nội", phoneNum: "0314526751", position: "Bảo vệ" },
        { name: "Nguyễn Thị Hồng", gender: "Nữ", doB: '3/4/1989', address: "Hà Nội", phoneNum: "0987625374", position: "Vệ sinh" },
        { name: "Vũ Văn Nam", gender: "Nam", doB: '10/4/1990', address: "Thái Bình", phoneNum: "0357285904", position: "Bảo vệ" },
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
            <Workspace>
                <h1 className={cx('title')}>Danh Sách Nhân Viên</h1>
                <Search placeholder="Tìm kiếm" onClick={handleSearch} onKeyDown={handleKeyPress} />
                <button className={cx('add')}>Thêm nhân viên</button>
                <Table listHead={listHead}>
                    {
                        listRow.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.doB}</td>
                                    <td>{row.address}</td>
                                    <td>{row.phoneNum}</td>
                                    <td>{row.position}</td>
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

export default ManageEmployee;