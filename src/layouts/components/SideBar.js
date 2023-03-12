
import classNames from "classnames/bind";
import styles from '../../css/SideBar.module.scss'
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)

function SideBar({ routes }) {
    return (

        <aside className={cx('container')}>

            <Menu>
                {
                    routes.map((route, index) => {
                        return <MenuItem key={index} title={route.title} to={route.path} />
                    })
                }
            </Menu>

        </aside>

    );
}

export default SideBar;