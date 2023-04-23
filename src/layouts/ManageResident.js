
import { useState, useEffect } from 'react';
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
    const [residents, setResidents] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/residents')
            .then(res => res.json())
            .then(data => {
                setResidents(data)
                setData(data);
            })
            .catch(err => console.log(err))
    }, []);

    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        if (searchText === "") setResidents(data)
        else {
            setResidents(
                data.filter((resident) => {
                    if (resident.apartmentNum.toLowerCase().includes(searchText.toLowerCase()) ||
                        resident.name.toLowerCase().includes(searchText.toLowerCase())) return resident;
                    else return null;
                })
            )
        }
    }, [searchText])

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
        <div className={cx('container')}>
            <Workspace>
                <h1 className={cx('title')}>Danh Sách Cư dân</h1>
                <Search placeholder="Tìm kiếm" onChange={e => setSearchText(e.target.value)} />
                <button onClick={() => {
                    toggleModal()
                    setId(-1)
                }} className={cx('add')}>Thêm cư dân</button>
                <Table listHead={listHead}>
                    {
                        residents.map((resident) => {
                            return (
                                <tr key={resident.residentId}>
                                    <td>{resident.apartmentNum}</td>
                                    <td>{resident.name}</td>
                                    <td>{resident.gender}</td>
                                    <td>{resident.dob}</td>
                                    <td>{resident.phone}</td>
                                    <td>{resident.relationship}</td>
                                    <td><button onClick={() => {
                                        setId(resident.residentId)
                                        setModal(!modal)
                                    }} >Thay đổi</button>
                                        <button onClick={toggleConfirmModal} ><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<AdjustResident onClick={toggleModal} id={id} />} />
                }

                {
                    confirmModal &&
                    <PopupModal onClick={toggleConfirmModal} content={<Confirm onClick={toggleConfirmModal} handleDelete={handleDelete} />} />
                }
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </div>
    );
}

export default ManageResident;