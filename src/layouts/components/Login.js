
import classNames from 'classnames/bind'
import styles from '../../css/Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('login-wrapper')}>
            <h1>Please login</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div >
    );
}

export default Login;

