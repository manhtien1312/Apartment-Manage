
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from '../../css/AddEntry.module.scss';

const cx = classNames.bind(styles);

function AdjustEmployee({ onClick, id }) {

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/employee/${id}`)
            .then(res => res.json())
            .then(data => setEmployee(data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = () => {
        console.log(employee)
    }

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <button id={cx('exit')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1>Nhân viên</h1>
                <form>
                    <div className={cx('info')}>
                        <label>Tên đầy đủ:
                            <input type="text" defaultValue={employee.name}
                                onChange={e => setEmployee({ ...employee, name: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giới tính:
                            <select defaultValue={employee.gender}
                                onChange={e => setEmployee({ ...employee, gender: e.target.value })}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </label>
                        <br></br>
                        <label>Ngày sinh:
                            <input type="date" defaultValue={employee.dob}
                                onChange={e => setEmployee({ ...employee, dob: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Địa chỉ:
                            <input type="text" defaultValue={employee.address}
                                onChange={e => setEmployee({ ...employee, address: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Số điện thoại:
                            <input type="text" defaultValue={employee.phone}
                                onChange={e => setEmployee({ ...employee, phone: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Vị trí làm việc:
                            <input type="text" defaultValue={employee.position}
                                onChange={e => setEmployee({ ...employee, position: e.target.value })} />
                        </label>
                        <br></br>
                    </div>
                    <div className={cx('btn')}>
                        <button type="submit" onClick={handleSubmit}>Xác nhận</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default AdjustEmployee;