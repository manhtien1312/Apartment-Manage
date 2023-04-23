
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Search from './components/Search';
import Table from './components/Table';
import PopupModal from './components/PopupModal';
import AdjustApartment from './components/AdjustApartment';
import { adminRoutes } from '../routes/routes';
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/Manage.module.scss';

const cx = classNames.bind(styles);

function ManageApartment() {

    // Lấy thông tin từ BE
    const listHead = ["Số căn hộ", "Diện tích (m2)", "Số phòng", "Tình trạng", "Chủ hộ"]
    const [apartments, setApartments] = useState([]);
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/apartments')
            .then((res) => res.json())
            .then((data) => {
                setApartments(data);
                setData(data)
            })
            .catch((err) => console.log(err))
    }, []);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        if (searchText === "") setApartments(data)
        else {
            setApartments(
                data.filter((apartment) => {
                    if (apartment.apartmentId.toLowerCase().includes(searchText.toLowerCase())) return apartment;
                    else return null;
                })
            )
        }
    }, [searchText])

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className={cx('container')}>
            <Workspace >
                <h1 className={cx('title')}>Danh Sách Căn Hộ</h1>
                <Search placeholder="Tìm kiếm" onChange={e => setSearchText(e.target.value)} />
                <Table listHead={listHead}>
                    {
                        apartments.map((apartment, index) => {
                            return (
                                <tr key={index}>
                                    <td>{apartment.apartmentId}</td>
                                    <td>{apartment.area}</td>
                                    <td>{apartment.rooms}</td>
                                    <td>{apartment.status}</td>
                                    <td>{apartment.owner}</td>
                                    <td><button onClick={() => {
                                        setId(apartment.apartmentId)
                                        setModal(!modal)
                                    }}>Thay đổi</button></td>
                                </tr>
                            )
                        })
                    }
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<AdjustApartment id={id} onClick={toggleModal} />} />
                }
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />


        </div>
    );
}

export default ManageApartment;