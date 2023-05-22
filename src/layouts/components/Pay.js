
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../../css/Confirm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import config from "../../config";

const cx = classNames.bind(styles);

function Pay({ onClick, id }) {

    const [paymentMoney, setPaymentMoney] = useState();
    const navigate = useNavigate()

    const handlePayment = () => {

        const requestBody = {
            id: id,
            money: paymentMoney,
        }

        fetch('http://localhost:8080/bill/payment', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
            .then(() => {
                navigate(config.routes.manageService)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={cx('content')}>
            <button id={cx('exit')} onClick={onClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h3>Nhập số tiền thanh toán</h3>
            <input type="number" onChange={e => setPaymentMoney(e.target.value)} />
            <div className={cx('btn')}>
                <button onClick={() => {
                    handlePayment()
                }}>Xác nhận</button>
                <button onClick={onClick}>Hủy</button>
            </div>
        </div>
    );
}

export default Pay;