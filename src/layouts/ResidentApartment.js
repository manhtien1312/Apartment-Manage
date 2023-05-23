
import { useEffect, useState } from 'react';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import { userRoutes } from "../routes/routes";
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/Resident.module.scss';

const cx = classNames.bind(styles);

function ResidentApartment() {

    const apartmentId = sessionStorage.getItem("id")

    const [apartment, setApartment] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/apartment/${apartmentId}`)
            .then(res => res.json())
            .then(data => setApartment(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={cx('container')}>
            <Workspace >
                <h1 className={cx('title')}>Thông tin căn hộ</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Số căn hộ</td>
                            <td>{apartment.apartmentId}</td>
                        </tr>
                        <tr>
                            <td>Diện tích</td>
                            <td>{apartment.area}</td>
                        </tr>
                        <tr>
                            <td>Số phòng</td>
                            <td>{apartment.rooms}</td>
                        </tr>
                        <tr>
                            <td>Số lượng phương tiện đăng kí</td>
                            <td>Ô tô: {apartment.cars}<br />
                                Xe máy: {apartment.motorbikes}<br />
                                Xe đạp: {apartment.bikes}<br />
                                Xe điện: {apartment.electricbikes}<br /></td>
                        </tr>
                        <tr>
                            <td>Số điện</td>
                            <td>{apartment.electric}</td>
                        </tr>
                        <tr>
                            <td>Số nước</td>
                            <td>{apartment.water}</td>
                        </tr>
                    </tbody>
                </table>
            </Workspace>

            <SideBar routes={userRoutes} />

            <Header to={config.routes.resident} />


        </div>
    );
}

export default ResidentApartment;