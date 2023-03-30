
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from '../../css/Search.module.scss';

const cx = classNames.bind(styles);

function Search({ placeholder, onClick, onKeyDown }) {
    return (
        <div className={cx('search-bar')}>
            <input className={cx('search-info')} type='text' placeholder="Tìm kiếm" onKeyDown={onKeyDown} />
            <button className={cx('search-btn')} onClick={onClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Search;