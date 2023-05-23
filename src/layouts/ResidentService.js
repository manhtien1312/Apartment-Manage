
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Workspace from './components/Workspace';
import Table from './components/Table';
import PayAssist from './components/PayAssist';
import PopupModal from './components/PopupModal';
import { userRoutes } from "../routes/routes";
import config from '../config';

import classNames from 'classnames/bind';
import styles from '../css/Manage.module.scss'

const cx = classNames.bind(styles)

function ResidentService() {

    const [bill, setBill] = useState({});
    const [apartment, setApartment] = useState({});
    const [unitPrice, setUnitPrice] = useState({});
    const apartmentId = sessionStorage.getItem("id")

    useEffect(() => {
        fetch(`http://localhost:8080/lastest-bill/${apartmentId}`)
            .then(res => res.json())
            .then(data => setBill(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8080/apartment/${bill.apartment}`)
            .then(res => res.json())
            .then(data => setApartment(data))
            .catch(err => console.log(err))
    }, [bill])

    useEffect(() => {
        fetch('http://localhost:8080/bill/price-list')
            .then(res => res.json())
            .then(data => setUnitPrice(data))
            .catch(err => console.log(err))
    }, [])

    const listHead = ["Khoản mục", "Đơn vị", "Số lượng", "Đơn giá", "Thành tiền"]
    const listRow = [
        { name: "Phí gửi xe ô tô", unit: "Chiếc", quantity: apartment.cars, unitPrice: unitPrice.carPrice, total: bill.carExpense },
        { name: "Phí gửi xe máy", unit: "Chiếc", quantity: apartment.motorbikes, unitPrice: unitPrice.motorbikePrice, total: bill.motorbikeExpense },
        { name: "Phí gửi xe điện", unit: "Chiếc", quantity: apartment.electricbikes, unitPrice: unitPrice.electricbikePrice, total: bill.electricbikeExpense },
        { name: "Phí gửi xe đạp", unit: "Chiếc", quantity: apartment.bikes, unitPrice: unitPrice.bikePrice, total: bill.bikeExpense },
        { name: "Phí dịch vụ căn hộ", unit: "m2", quantity: apartment.area, unitPrice: unitPrice.roomServicePrice, total: bill.serviceExpense },
        { name: "Tiền nước sinh hoạt", unit: "m3", quantity: bill.waterNum, unitPrice: unitPrice.waterPrice, total: bill.waterExpense },
        { name: "Tiền điện", unit: "kwh", quantity: bill.electricNum, unitPrice: unitPrice.electricPrice, total: bill.electricExpense },
    ]

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    let check = false
    if (bill.status === "Đã thanh toán") check = true

    return (
        <div className={cx('container')}>
            <Workspace>
                <h1 className={cx('title')}>Hóa đơn tháng {bill.month}/{bill.year}</h1>
                <h3>Căn hộ: {bill.apartment}</h3>
                <button disabled={check} onClick={toggleModal} className={cx('add')}>{check === true ? "Đã thanh toán" : "Thanh toán"}</button>
                <Table listHead={listHead}>
                    {
                        listRow.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.unit}</td>
                                    <td>{row.quantity}</td>
                                    <td>{row.unitPrice}</td>
                                    <td>{row.total}</td>
                                </tr>
                            )
                        })
                    }
                    <tr colSpan="4">
                        <td colSpan="4">Tổng cộng kì này</td>
                        <td>{bill.total}</td>
                    </tr>
                    <tr colSpan="4">
                        <td colSpan="4">Số còn phải thu các kì trước</td>
                        <td>{bill.loanBefore}</td>
                    </tr>
                    <tr colSpan="4">
                        <td colSpan="4">Tổng số tiền đã thanh toán</td>
                        <td>{bill.payed}</td>
                    </tr>
                    <tr colSpan="4">
                        <td colSpan="4">Tổng số tiền còn phải thanh toán</td>
                        <td>{bill.loanAfter}</td>
                    </tr>
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<PayAssist onClick={toggleModal} />} />
                }
            </Workspace>

            <SideBar routes={userRoutes} />

            <Header to={config.routes.resident} />

        </div>
    );
}

export default ResidentService;