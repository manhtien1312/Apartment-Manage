
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import Table from './components/Table';
import AdjustEmployee from './components/AdjustEmployee';
import Confirm from './components/Confirm';
import PopupModal from './components/PopupModal';
import { adminRoutes } from '../routes/routes';
import config from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../css/Manage.module.scss'


const cx = classNames.bind(styles);

function ManageEmployee() {

    //Lấy thông tin từ BE
    const listHead = ["Tên", "Giới tính", "Ngày sinh", "Địa chỉ", "Số điện thoại", "Vị trí làm việc"]
    const [employees, setEmployees] = useState([]);
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [id, setId] = useState();


    useEffect(() => {
        fetch('http://localhost:8080/employees')
            .then(res => res.json())
            .then(data => {
                setEmployees(data)
                setData(data)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (searchText === "") setEmployees(data)
        else {
            setEmployees(
                data.filter((employee) => {
                    if (employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        employee.position.toLowerCase().includes(searchText.toLowerCase())) return employee;
                    else return null;
                })
            )
        }
    }, [searchText])


    const handleDelete = () => {
        fetch(`http://localhost:8080/employee/delete/${id}`)
            .then(
                setEmployees(employees.filter((employee) => {
                    return employee.employeeId !== id
                }))
            )
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
                <h1 className={cx('title')}>Danh Sách Nhân Viên</h1>
                <Search placeholder="Tìm kiếm" onChange={e => setSearchText(e.target.value)} />
                <button onClick={() => {
                    toggleModal()
                    setId(-1)
                }} className={cx('add')}>Thêm nhân viên</button>
                <Table listHead={listHead}>
                    {
                        employees.map((employee) => {
                            return (
                                <tr key={employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.dob}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.position}</td>
                                    <td><button onClick={() => {
                                        setId(employee.employeeId)
                                        toggleModal()
                                    }}>Thay đổi</button>
                                        <button onClick={() => {
                                            setId(employee.employeeId)
                                            toggleConfirmModal()
                                        }} ><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<AdjustEmployee id={id} onClick={toggleModal} />} />
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

export default ManageEmployee;