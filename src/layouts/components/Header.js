
import classNames from "classnames/bind";
import styles from '../../css/Header.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Header({ to }) {
    return (

        <>
            <div className={cx('nav-bar')}>
                <div className={cx('container')}>
                    <Link to={to}><img className={cx('logo')} src="https://thegardenhill.com.vn/wp-content/uploads/2021/04/logo-bidhomes-the-garden-hill.png" alt="logo" /></Link>
                    <div className={cx('user-info')}>
                        <h3 className={cx('user-name')}>Nguyễn Văn A</h3>
                        <button className={cx('user-icon')}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={cx('padding')}></div>
        </>

    );
}

export default Header;