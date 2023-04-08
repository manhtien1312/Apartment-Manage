
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from '../../css/AddEntry.module.scss';

const cx = classNames.bind(styles);

function AdjustEmployee({ onClick }) {

    const [name, setName] = useState("");
    const [gender, setGender] = useState("Nam");
    const [doB, setDoB] = useState();
    const [address, setAddress] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [position, setPosition] = useState("");

    const handleSubmit = () => {
        // console.log(name, gender, doB, address, phoneNum, position)
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
                            <input type="text" onChange={e => setName(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Giới tính:
                            <select value={gender} onChange={e => setGender(e.target.value)}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </label>
                        <br></br>
                        <label>Ngày sinh:
                            <input type="date" onChange={e => setDoB(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Địa chỉ:
                            <input type="text" onChange={e => setAddress(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Số điện thoại:
                            <input type="text" onChange={e => setPhoneNum(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Vị trí làm việc:
                            <input type="text" onChange={e => setPosition(e.target.value)} />
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