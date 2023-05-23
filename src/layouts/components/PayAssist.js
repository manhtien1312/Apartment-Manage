

import classNames from "classnames/bind";
import styles from "../../css/PayAssist.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PayAssist({ onClick }) {

    return (
        <div className={cx('content')}>
            <button id={cx('exit')} onClick={onClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h3>Quét mã QR để thanh toán</h3>
            <img src={require('../../images/qrcode.png')} alt="QR CODE" />
            <div className={cx('btn')}>
                <button onClick={onClick}>Xác nhận</button>
            </div>
        </div>
    );
}

export default PayAssist;