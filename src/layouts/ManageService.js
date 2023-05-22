
import { useEffect, useState } from 'react';
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
    const [bills, setBills] = useState([]);
    const [data, setData] = useState([]);
    const [apartmentId, setApartmentId] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/lastest-bills')
            .then(res => res.json())
            .then(data => {
                setBills(data)
                setData(data)
            })
            .catch(err => console.log(err))
    }, [])

    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        if (searchText === "") setBills(data)
        else {
            setBills(
                data.filter((bill) => {
                    if (bill.apartment.toLowerCase().includes(searchText.toLowerCase())) return bill;
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
            <Workspace>
                <h1 className={cx('title')}>Danh Sách Hóa Đơn Dịch Vụ</h1>
                <Search placeholder="Tìm kiếm" onChange={e => setSearchText(e.target.value)} />
                <Table listHead={listHead}>
                    {
                        bills.map((bill) => {
                            let check = false
                            if (bill.status === "Chưa thanh toán") check = true
                            return (
                                <tr key={bill.id}>
                                    <td>{bill.apartment}</td>
                                    <td><Link to={`/manage/services/bill-detail/${bill.id}`}>Tháng {bill.month}/{bill.year}</Link></td>
                                    <td>{bill.status}</td>
                                    <td><button
                                        disabled={check}
                                        onClick={() => {
                                            toggleModal()
                                            setApartmentId(bill.apartment)
                                        }}>Tạo hóa đơn</button></td>
                                </tr>
                            )
                        })
                    }
                </Table>

                {
                    modal &&
                    <PopupModal onClick={toggleModal} content={<CreateBill apartmentId={apartmentId} onClick={toggleModal} />} />
                }

            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </div>
    );
}

export default ManageService;