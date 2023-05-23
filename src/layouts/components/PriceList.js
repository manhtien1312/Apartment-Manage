
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from '../../css/AddEntry.module.scss';

const cx = classNames.bind(styles);

function PriceList({ onClick }) {

    const [priceList, setPriceList] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/bill/price-list')
            .then(res => res.json())
            .then(data => setPriceList(data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = () => {

        fetch('http://localhost:8080/bill/price-list/save', {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify({ ...priceList, id: 0 }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
            .then(window.location.reload())
            .catch(err => console.log(err))

    }

    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <button id={cx('exit')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1>Bảng giá dịch vụ</h1>
                <div>
                    <div className={cx('info')}>
                        <label>Giá gửi ô tô:
                            <input placeholder="đồng/chiếc" type="number" defaultValue={priceList.carPrice}
                                onChange={e => setPriceList({ ...priceList, carPrice: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giá gửi xe máy:
                            <input placeholder="đồng/chiếc" type="number" defaultValue={priceList.motorbikePrice}
                                onChange={e => setPriceList({ ...priceList, motorbikePrice: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giá gửi xe đạp:
                            <input placeholder="đồng/chiếc" type="number" defaultValue={priceList.bikePrice}
                                onChange={e => setPriceList({ ...priceList, bikePrice: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giá gửi xe điện:
                            <input placeholder="đồng/chiếc" type="number" defaultValue={priceList.electricbikePrice}
                                onChange={e => setPriceList({ ...priceList, electricbikePrice: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giá điện:
                            <input placeholder="đồng/kwh" type="number" defaultValue={priceList.electricPrice}
                                onChange={e => setPriceList({ ...priceList, electricPrice: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giá nước:
                            <input placeholder="đồng/khối" type="number" defaultValue={priceList.waterPrice}
                                onChange={e => setPriceList({ ...priceList, waterPrice: e.target.value })} />
                        </label>
                        <br></br>
                        <label>Giá dịch vụ phòng:
                            <input placeholder="đồng/m2" type="number" defaultValue={priceList.roomServicePrice}
                                onChange={e => setPriceList({ ...priceList, roomServicePrice: e.target.value })} />
                        </label>
                    </div>
                    <div className={cx('btn')}>
                        <button onClick={handleSubmit}>Xác nhận</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default PriceList;