
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from '../../css/AddEntry.module.scss';

const cx = classNames.bind(styles);

function AdjustApartment({ onClick }) {

    const [houseNum, setHouseNum] = useState("");
    const [area, setArea] = useState();
    const [rooms, setRooms] = useState();
    const [status, setstatus] = useState("Chưa bàn giao");
    const [owner, setOwner] = useState("");

    const handleSubmit = () => {
        console.log(houseNum, area, rooms, status, owner)
    }

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <button id={cx('exit')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1>Căn hộ</h1>
                <form>
                    <div className={cx('info')}>
                        <label>Số căn hộ:
                            <input type="text" onChange={e => setHouseNum(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Diện tích:
                            <input type="number" onChange={e => setArea(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Số phòng:
                            <input type="number" onChange={e => setRooms(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Tình trạng:
                            <select value={status} onChange={e => setstatus(e.target.value)}>
                                <option value="Chưa bàn giao">Chưa bàn giao</option>
                                <option value="Đã bán">Đã bán</option>
                                <option value="Đã thuê">Đã thuê</option>
                            </select>
                        </label>
                        <br></br>
                        <label>Chủ hộ:
                            <input type="text" onChange={e => setOwner(e.target.value)} />
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

export default AdjustApartment;