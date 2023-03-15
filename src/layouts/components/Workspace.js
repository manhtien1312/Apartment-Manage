
import classNames from "classnames/bind";
import styles from '../../css/Workspace.module.scss';

const cx = classNames.bind(styles);

function Workspace({ children }) {
    return (
        <div className={cx('work-space')}>
            {children}
        </div>
    );
}

export default Workspace;