
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "../../css/AddEntry.module.scss"

const cx = classNames.bind(styles);

function AdjustResident({ onClick, mode }) {

    const [houseNum, setHouseNum] = useState("");
    const [name, setName] = useState("")
    const [gender, setGender] = useState("Nam");
    const [doB, setDoB] = useState();
    const [phoneNum, setPhoneNum] = useState("");
    const [relative, setRelative] = useState("");

    const handleSubmit = () => {
        // console.log(houseNum, name, gender, doB, phoneNum, relative)
    }

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <button id={cx('exit')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1>Cư dân</h1>
                <form>
                    <div className={cx('info')}>
                        <label>Số căn hộ:
                            <input type="text" onChange={e => setHouseNum(e.target.value)} />
                        </label>
                        <br></br>
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
                        <label>Số điện thoại:
                            <input type="text" onChange={e => setPhoneNum(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Quan hệ với chủ hộ:
                            <input type="text" onChange={e => setRelative(e.target.value)} />
                        </label>
                        <br></br>
                    </div>
                    <div className={cx('btn')}>
                        <button id={cx('change')} type="submit" onClick={handleSubmit}>Xác nhận</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default AdjustResident;