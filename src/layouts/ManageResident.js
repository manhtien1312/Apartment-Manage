
import { useState } from 'react';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import Table from './components/Table';
import PopupModal from './components/PopupModal';
import AdjustResident from './components/AdjustResident';
import Confirm from './components/Confirm';
import { adminRoutes } from '../routes/routes';
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/Manage.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ManageResident() {

    //Lấy thông tin từ BE
    const listHead = ["Số căn hộ", "Tên", "Giới tính", "Ngày sinh", "Số điện thoại", "Quan hệ với chủ hộ"]
    const listRow = [
        { houseNum: "A0803", name: "Nguyễn Văn An", gender: "Nam", doB: '1/1/1990', phoneNum: "0314526751", position: "Chủ hộ" },
        { houseNum: "A0803", name: "Trần Thị Hồng", gender: "Nữ", doB: '3/4/1991', phoneNum: "0987625374", position: "Vợ" },
        { houseNum: "A0804", name: "Vũ Văn Nam", gender: "Nam", doB: '10/4/1990', phoneNum: "0357285904", position: "Chủ hộ" },
        { houseNum: "A0804", name: "Vũ Minh Anh", gender: "Nữ", doB: '26/2/1995', phoneNum: "0357285904", position: "Em gái" },
    ]

    const handleSearch = () => {

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const handleDelete = () => {

    }

    const [modal, setModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const toggleConfirmModal = () => {
        setConfirmModal(!confirmModal)
    }

    return (
        <>
            <Workspace>
                <h1 className={cx('title')}>Danh Sách Cư dân</h1>
                <Search onClick={handleSearch} onKeyDown={handleKeyPress} />
                <button onClick={toggleModal} className={cx('add')}>Thêm cư dân</button>
                <Table listHead={listHead}>
                    {
                        listRow.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.houseNum}</td>
                                    <td>{row.name}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.doB}</td>
                                    <td>{row.phoneNum}</td>
                                    <td>{row.position}</td>
                                    <td><button onClick={toggleModal}>Thay đổi</button>
                                        <button onClick={toggleConfirmModal}><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<AdjustResident onClick={toggleModal} />} />
                }

                {
                    confirmModal &&
                    <PopupModal onClick={toggleConfirmModal} content={<Confirm onClick={toggleConfirmModal} handleDelete={handleDelete} />} />
                }
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </>
    );
}

export default ManageResident;