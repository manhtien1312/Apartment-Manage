
import config from '../../config'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from '../../css/Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const loginModes = [
    {
        id: 0,
        name: 'Quản Lý'
    },
    {
        id: 1,
        name: 'Cư Dân'
    }
]

function Login() {

    const [checked, setChecked] = useState(1)
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        // gửi thông tin đăng nhập đi qua biến checked, userName và password 
    }

    return (

        <div className={cx('body')}>
            <div className={cx('login-wrapper')}>
                <Link id={cx('exit-login')} to={config.routes.home}>
                    <FontAwesomeIcon icon={faXmark} />
                </Link>
                <h1>Đăng Nhập</h1>
                <form>
                    <div className={cx('login-mode')}>
                        {
                            loginModes.map(mode => (
                                <div key={mode.id}>
                                    <input type="radio" checked={checked === mode.id} onChange={() => setChecked(mode.id)} />
                                    {mode.name}
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx('login-info')}>
                        <label>
                            <input type="text" placeholder='Tên đăng nhập' onChange={e => setUserName(e.target.value)} />
                        </label>
                        <br></br>
                        <label>
                            <input type="password" placeholder='Mật khẩu' onChange={e => setPassword(e.target.value)} />
                        </label>
                        <br></br>
                        <Link to={config.routes.forgot}>Quên mật khẩu?</Link>
                    </div>
                    <div className={cx('btn')}>
                        <button type="submit" onClick={handleSubmit}>Đăng nhập</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default Login;

