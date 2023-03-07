
import classNames from 'classnames/bind'
import styles from '../css/HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {

    return (
        <div className={cx('home-page')}>

            <div className={cx('nav-bar')}>
                <div className={cx('container')}>
                    <a href="http://localhost:3000/"><img className={cx('logo')} src="https://thegardenhill.com.vn/wp-content/uploads/2021/04/logo-bidhomes-the-garden-hill.png" alt="logo" /></a>
                    <button id={cx('login')}>Đăng nhập</button>
                </div>
            </div>

            <img className={cx('img-around')} src='https://thegardenhill.com.vn/wp-content/uploads/2021/04/banner-the-garden-hill-my-dinh-1024x480.jpg' alt='OverView' />

            <div className={cx('over-view')}>

                <div className={cx('description')}>
                    <h1 className={cx('apartment-name')}>The garden hill</h1>

                    <p>Dự án căn hộ chung cư The Garden Hill 99 Trần Bình được xây dựng đem lại sự thoải mái và thẩm mỹ cao nhất cho cư dân. Dự án được xây dựng theo tiêu chuẩn cao với hệ thống hạ tầng hoàn chỉnh, tạo ra một môi trường sống hoàn hảo nơi bạn và gia đình được trải nghiệm cuộc sống yên bình trọn vẹn nhất.</p>
                </div>

            </div>

            <div className={cx('location')}>

                <h2>Vị trí chung cư the garden hill 99 trần bình</h2>

                <div className={cx('wrapper')}>
                    <div className={cx('desc-location')}>
                        <p>Vị trí dự án The Garden Hill chắc chắn sẽ khiến bất cứ khách hàng nào tới đây đều hài lòng. Tọa lạc trên đường Trần Bình – khu vực cửa ngõ phía Tây thủ đô đang dồi dào tiềm năng để phát triển.</p>
                        <ul className={cx('desc-list')}>
                            <li>Mặt trước: Hướng Tây Bắc, view ra đường Trần Bình và khu dân cư (thấp tầng)</li>
                            <li>Mặt sau hướng Đông Bắc kết nối đường phụ thông ra đường Nguyễn Hoàng và ngõ 16 Phạm Hùng.</li>
                            <li>Mặt bên phải (nhìn từ đường Trần Bình) hướng Tây Nam, liền kề dự án Dolphin Plaza đã hoàn thành và dự án Mỹ Đình Plaza 2 (cao 28 tầng) đang thi công phần móng.</li>
                            <li>Mặt bên trái hướng Đông Bắc view ra chợ Mỹ Đình 2 hiện là khu đất trống, chưa có công trình xây dựng.</li>
                        </ul>
                        <p>Đây là một điểm cộng lớn bởi việc lưu thông cũng như sinh hoạt hằng ngày của cư dân khồng gặp nhiều khó khăn. Dự án nằm sát với chợ, bệnh viện 198, bến xe Mỹ Đình và các trường học lớn từ cấp 1 đến Đại học nhằm đáp ứng tối đa nhất tất cả những nhu cầu sống thiết yếu của cư dân.</p>
                    </div>

                    <div className={cx('img-location')}>
                        <img src='https://thegardenhill.com.vn/wp-content/uploads/2021/04/vi-tri-trung-tam-tai-my-dinh.jpg' alt='map-img'></img>
                    </div>
                </div>

            </div>

            <div className={cx('footer')}>

                <div className={cx('profile')}>
                    <img className={cx('logo')} src="https://thegardenhill.com.vn/wp-content/uploads/2021/04/logo-bidhomes-the-garden-hill.png" alt="logo" />
                    <ul>
                        <li>Trụ sở: Tầng 5, Tòa nhà The Garden Hill, 99 Trần Bình, P. Mỹ Đình 2, Q. Nam Từ Liêm, Hà Nội</li>
                        <li>Nhà mẫu: 99 Trần Bình, P. Mỹ Đình 2, Q. Nam Từ Liêm, Hà Nội</li>
                    </ul>
                </div>

                <div className={cx('contact')}>

                    <h3>Liên hệ hotline</h3>

                    <ul>
                        <li>Hotline: 0968 382 682</li>
                        <li>CSKH: 024 3556 0316/Ext 748-752</li>
                        <li>Email: cskh@bidgroup.com.vn</li>
                        <li>Website: https://thegardenhill.com.vn</li>
                    </ul>

                </div>

            </div>

        </div>
    )
}


export default HomePage