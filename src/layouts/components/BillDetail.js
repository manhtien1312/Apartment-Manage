
import Header from '../components/Header';
import SideBar from "../components/SideBar";
import Workspace from '../components/Workspace';
import { adminRoutes } from "../../routes/routes";
import config from '../../config';
import Table from './Table';

import classNames from 'classnames/bind';
import styles from "../../css/Manage.module.scss";

const cx = classNames.bind(styles);

function ResidentApartment() {

    const listHead = ["Khoản mục", "Diễn giải", "Đơn vị", "Số lượng", "Đơn giá", "Thành tiền"]
    const listRow = [
        { name: "Phí gửi xe ô tô", desc: "", unit: "Chiếc", quantity: "", unitPrice: 1000000, total: "" },
        { name: "Phí gửi xe máy", desc: "", unit: "Chiếc", quantity: "", unitPrice: 60000, total: "" },
        { name: "Phí gửi xe điện", desc: "", unit: "Chiếc", quantity: "", unitPrice: 100000, total: "" },
        { name: "Phí gửi xe đạp", desc: "", unit: "Chiếc", quantity: "", unitPrice: 30000, total: "" },
        { name: "Phí dịch vụ căn hộ", desc: "", unit: "m2", quantity: "", unitPrice: 6500, total: "" },
        { name: "Tiền nước sinh hoạt", desc: "", unit: "m3", quantity: "", unitPrice: 6869, total: "" },
        { name: "Tiền nước nóng", desc: "", unit: "m3", quantity: "", unitPrice: 43500, total: "" },
        { name: "Tiền điện", desc: "", unit: "kwh", quantity: "", unitPrice: 3500, total: "" },
    ]

    return (
        <>
            <Workspace>
                <h1 className={cx('title')}>Hóa đơn tháng { }</h1>
                <h3>Căn hộ: { }</h3>
                <Table listHead={listHead}>
                    {
                        listRow.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.desc}</td>
                                    <td>{row.unit}</td>
                                    <td>{row.quantity}</td>
                                    <td>{row.unitPrice}</td>
                                    <td>{row.total}</td>
                                </tr>
                            )
                        })
                    }
                    <tr colSpan="5">
                        <td colSpan="5">Tổng cộng kì này</td>
                        <td>0</td>
                    </tr>
                    <tr colSpan="5">
                        <td colSpan="5">Số còn phải thu các kì trước</td>
                        <td>0</td>
                    </tr>
                    <tr colSpan="5">
                        <td colSpan="5">Tổng số tiền đã thanh toán</td>
                        <td>0</td>
                    </tr>
                    <tr colSpan="5">
                        <td colSpan="5">Tổng số tiền còn phải thanh toán</td>
                        <td>0</td>
                    </tr>
                </Table>
            </Workspace>

            <SideBar routes={adminRoutes} />

            <Header to={config.routes.manage} />

        </>
    );
}

export default ResidentApartment;