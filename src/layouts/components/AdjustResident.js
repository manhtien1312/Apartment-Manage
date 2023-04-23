
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "../../css/AddEntry.module.scss"

const cx = classNames.bind(styles);

function AdjustResident({ onClick, id }) {

    const [resident, setResident] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/resident/${id}`)
            .then(res => res.json())
            .then(data => setResident(data))
            .catch(err => console.log(err))
    }, []);

    const handleSubmit = () => {
        console.log(resident)
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
                            <input type="text" defaultValue={resident.apartmentNum}
                                onChange={e => setResident({ ...resident, apartmentNum: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Tên đầy đủ:
                            <input type="text" defaultValue={resident.name}
                                onChange={e => setResident({ ...resident, name: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giới tính:
                            <select defaultValue={resident.gender}
                                onChange={e => setResident({ ...resident, gender: e.target.value })}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </label>
                        <br></br>
                        <label>Ngày sinh:
                            <input type="date" defaultValue={resident.dob}
                                onChange={e => setResident({ ...resident, dob: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Số điện thoại:
                            <input type="text" defaultValue={resident.phone}
                                onChange={e => setResident({ ...resident, phone: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Quan hệ với chủ hộ:
                            <input type="text" defaultValue={resident.relationship}
                                onChange={e => setResident({ ...resident, relationship: e.target.value })} />
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