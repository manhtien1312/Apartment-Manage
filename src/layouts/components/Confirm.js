
import classNames from "classnames/bind";
import styles from "../../css/Confirm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Confirm({ onClick, handleDelete }) {
    return (
        <div className={cx('content')}>
            <button id={cx('exit')} onClick={onClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h3>Bạn chắc chắn muốn xóa?</h3>
            <div className={cx('btn')}>
                <button onClick={() => {
                    handleDelete()
                    onClick()
                }}>Xác nhận</button>
                <button onClick={onClick}>Hủy</button>
            </div>
        </div>
    );
}

export default Confirm;