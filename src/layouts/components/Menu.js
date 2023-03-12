
import classNames from "classnames/bind";
import styles from '../../css/Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({ children }) {
    return (
        <nav className={cx('menu-wrapper')}>{children}</nav>
    );
}

export default Menu;