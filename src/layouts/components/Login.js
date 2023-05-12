
import config from '../../config'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    const [passWord, setPassword] = useState();

    const navigate = useNavigate();

    const sendLoginRequest = () => {
        // gửi thông tin đăng nhập đi qua biến checked, userName và password 
        const requestBody = {
            id: undefined,
            username: userName,
            password: passWord,
            fullName: null,
        }

        if (checked === 0) {
            fetch('http://localhost:8080/manager-account', {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(data => {
                    sessionStorage.setItem("user", data.fullName);
                })
                .then(() => {
                    navigate(config.routes.manage)
                })
                .catch(err => console.log(err))
        } else {
            fetch('http://localhost:8080/resident-account', {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(data => {
                    sessionStorage.setItem("user", data.fullName);
                    navigate(config.routes.resident)
                })
                .catch(err => console.log(err))
        }
    }

    return (

        <div className={cx('body')}>
            <div className={cx('login-wrapper')}>
                <Link id={cx('exit-login')} to={config.routes.home}>
                    <FontAwesomeIcon icon={faXmark} />
                </Link>
                <h1>Đăng Nhập</h1>
                <div>
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
                        {/* {
                            checkLogin &&
                            <p>Sai tên đăng nhập hoặc mật khẩu!</p>
                        } */}
                        <Link to={config.routes.forgot}>Quên mật khẩu?</Link>
                    </div>
                    <div className={cx('btn')}>
                        <button type="submit" onClick={sendLoginRequest}>Đăng nhập</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Login;

