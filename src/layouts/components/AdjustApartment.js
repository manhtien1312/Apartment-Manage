
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from '../../css/AddEntry.module.scss';

const cx = classNames.bind(styles);

function AdjustApartment({ onClick, id }) {

    const [apartment, setApartment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/apartment/${id}`)
            .then(res => res.json())
            .then(data => setApartment(data))
            .catch(err => console.log(err))
    }, []);

    const handleSubmit = () => {
        console.log(apartment)
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
                            <input disabled type="text" defaultValue={apartment.apartmentId}
                                onChange={e => setApartment({ ...apartment, apartmentId: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Diện tích:
                            <input type="number" defaultValue={apartment.area}
                                onChange={e => setApartment({ ...apartment, area: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Số phòng:
                            <input type="number" defaultValue={apartment.rooms}
                                onChange={e => setApartment({ ...apartment, rooms: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Tình trạng:
                            <select value={apartment.status} onChange={e => setApartment({ ...apartment, status: e.target.value })}>
                                <option value="Đã bán">Đã bán</option>
                                <option value="Đã thuê">Đã thuê</option>
                                <option value="Chưa bàn giao">Chưa bàn giao</option>
                            </select>
                        </label>
                        <br></br>
                        <label>Chủ hộ:
                            <input type="text" defaultValue={apartment.owner}
                                onChange={e => setApartment({ ...apartment, owner: e.target.value })} />
                        </label>
                        <br></br>
                    </div>
                    <div className={cx('btn')}>
                        <button onClick={handleSubmit}>Xác nhận</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default AdjustApartment;