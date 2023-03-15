
import config from '../../config'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from '../../css/Forgot.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Forgot() {

    const [houseNumber, setHouseNumber] = useState();
    const [ownerName, setOwnerName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const handleSubmit = () => {
        //gửi thông tin người yêu cầu qua 3 biến houseNumber, ownerName, phoneNumber
    }

    return (
        <div className={cx('body')}>
            <div className={cx('forgot-wrapper')}>
                <Link id={cx('exit-forgot')} to={config.routes.login}>
                    <FontAwesomeIcon icon={faXmark} />
                </Link>
                <h1>Quên mật khẩu</h1>
                <form>
                    <p>Hãy nhập đúng các thông tin bên dưới để lấy lại mật khẩu</p>
                    <div className={cx('forgot-info')}>
                        <label>Số căn hộ:
                            <br />
                            <input type="text" onChange={e => setHouseNumber(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Tên chủ hộ:
                            <br />
                            <input type="text" onChange={e => setOwnerName(e.target.value)} />
                        </label>
                        <br></br>
                        <label>Số điện thoại:
                            <br />
                            <input type="text" onChange={e => setPhoneNumber(e.target.value)} />
                        </label>
                        <br></br>
                    </div>
                    <div className={cx('btn')}>
                        <button type="submit" onClick={handleSubmit}>Gửi yêu cầu</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default Forgot;