
import classNames from "classnames/bind";
import styles from '../../css/ChangePassword.module.scss';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles);

function ChangePassword({ onClick }) {

    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [newPasswordAgain, setNewPasswordAgain] = useState();

    const [check, setCheck] = useState(true);

    useEffect(() => {
        if (newPasswordAgain === newPassword) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }, [newPasswordAgain, newPassword])

    const handleSubmit = () => {

    }

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <button id={cx('exit')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1>Đổi mật khẩu</h1>
                <form>
                    <div className={cx('info')}>
                        <label>
                            <input type="password" placeholder='Mật khẩu cũ' onChange={e => setOldPassword(e.target.value)} />
                        </label>
                        <br></br>
                        <label>
                            <input type="password" placeholder='Mật khẩu mới' onChange={e => setNewPassword(e.target.value)} />
                        </label>
                        <br></br>
                        <label>
                            <input type="password" placeholder='Nhập lại mật khẩu mới' onChange={e => setNewPasswordAgain(e.target.value)} />
                        </label>
                        <br></br>
                    </div>
                    {!check && (
                        <p>Mật khẩu không trùng khớp</p>
                    )}
                    <div className={cx('btn')}>
                        <button type="submit" onClick={handleSubmit}>Thay đổi</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default ChangePassword;