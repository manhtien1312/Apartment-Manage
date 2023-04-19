
import classNames from "classnames/bind";
import styles from '../../css/Search.module.scss';

const cx = classNames.bind(styles);

function Search({ onChange }) {
    return (
        <div className={cx('search-bar')}>
            <input className={cx('search-info')} type='text' placeholder="Tìm kiếm" onChange={onChange} />
        </div>
    );
}

export default Search;