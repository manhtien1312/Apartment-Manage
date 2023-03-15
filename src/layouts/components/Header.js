
import classNames from "classnames/bind";
import styles from '../../css/Header.module.scss'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Popper from './Popper'
import PopperItem from './PopperItem'
import PopupModal from "./PopupModal";
import ChangePassword from "./ChangePassword";
import config from '../../config'

import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles)

function Header({ to }) {

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (

        <>
            <div className={cx('header')}>
                <div className={cx('nav-bar')}>
                    <div className={cx('container')}>
                        <Link to={to}><img className={cx('logo')} src="https://thegardenhill.com.vn/wp-content/uploads/2021/04/logo-bidhomes-the-garden-hill.png" alt="logo" /></Link>
                        <div className={cx('user-info')}>
                            <h3 className={cx('user-name')}>Nguyễn Văn A</h3>
                            <Tippy
                                visible={visible} onClickOutside={hide}
                                interactive
                                placement="bottom-end"
                                render={attrs => (
                                    <div className={cx('user-menu')} tabIndex="-1" {...attrs}>
                                        <Popper>
                                            <button
                                                className={cx('change-password')}
                                                onClick={toggleModal}
                                            >
                                                <PopperItem title='Đổi mật khẩu' icon={<FontAwesomeIcon icon={faKey} />} />
                                            </button>
                                            <PopperItem title='Đăng xuất' to={config.routes.home} icon={<FontAwesomeIcon icon={faRightFromBracket} />} />
                                        </Popper>
                                    </div>
                                )}
                            >
                                <button className={cx('user-icon')} onClick={visible ? hide : show}>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>

                <div className={cx('padding')}></div>
            </div>

            {
                modal &&
                <PopupModal onClick={toggleModal} content={<ChangePassword onClick={toggleModal} />} />
            }

        </>

    );
}

export default Header;