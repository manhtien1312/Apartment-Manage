
import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../../css/Login.module.scss'

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
                        <a href=''>Quên mật khẩu?</a>
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

