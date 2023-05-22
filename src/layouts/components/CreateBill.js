
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "../../css/AddEntry.module.scss";

const cx = classNames.bind(styles)

function CreateBill({ onClick, apartmentId }) {

    const [month, setMonth] = useState();
    const [electricNum, setElectricNum] = useState();
    const [waterNum, setWaterNum] = useState();

    const handleSubmit = () => {

        const requestBody = {
            month: month,
            electricNum: electricNum,
            waterNum: waterNum,
        }

        fetch(`http://localhost:8080/bill/add/${apartmentId}`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
            .then(window.location.reload())
            .catch(err => console.log(err))

    }

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <button id={cx('exit')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1>Tạo hóa đơn</h1>
                <div>
                    <div className={cx('info')}>
                        <label>Tháng:
                            <input type="month" onChange={e => setMonth(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Số điện:
                            <input type="number" onChange={e => setElectricNum(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Số nước:
                            <input type="number" onChange={e => setWaterNum(e.target.value)} />
                        </label>
                        <br></br>
                    </div>
                    <div className={cx('btn')}>
                        <button type="submit" onClick={handleSubmit}>Xác nhận</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default CreateBill;