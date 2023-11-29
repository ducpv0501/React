import React from 'react'
import classNames from 'classnames/bind'
import {FaShare, FaFacebookSquare,FaFacebook,FaCommentAlt} from 'react-icons/fa' 
import {AiFillCheckCircle,AiTwotoneLike} from 'react-icons/ai'
import {TfiCommentsSmiley} from 'react-icons/tfi'


import style from './Footer.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)


function Footer() {
  return (
    <div className={cx('footer')}>
        <div className={cx('top')}>
            <h3>công ty tnhh thương mại greavn</h3>
            <h3>EMAIL: CSKH@GEARVN.COM</h3>
            <div className={cx('top-top')}>
                <p>HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ: </p>
                <span> (Làm việc từ 08h00 - 21h00)</span>
            </div>
            <div className={cx('top-mid')}>
                <p>Gọi mua hàng</p>
                <span>1800 6975</span>
            </div>
            <div className={cx('top-left')}>
                <p>Hỗ trợ khách hàng</p>
                <span>1800 6173</span>
            </div>
            <div className={cx('link')}>
                <Link>Chính sách bảo hành</Link>
                <Link>Chính sách thanh toán </Link>
                <Link>Chính sách giao hàng</Link>
                <Link>Chính sách bảo mật</Link>
            </div>
            <img src='https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png' alt=''/>
        </div>
        <div className={cx('mid')}>
            <h3>HỆ THỐNG CỬA HÀNG:</h3>
            <div className={cx('mid-top')}>
                <p>SHOWROOM HCM: </p>
                <span> (Làm việc từ 08h00 - 21h00)</span>
            </div>
            <p>- Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.</p>
            <p>- Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ Đức.</p>
            <p>- Địa chỉ 3: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.</p>
            <p>- Địa chỉ 4: 415 An Dương Vương, Phường 10, Quận 6.</p>
            <div className={cx('mid-top')}>
                <p>SHOWROOM HN: </p>
                <span> (Làm việc từ 08h00 - 21h00)</span>
            </div>
            <p>- Địa chỉ 1: 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</p>
            <p>- Địa chỉ 2: 460 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội</p>
            <h3>TRUNG TÂM BẢO HÀNH:</h3>
            <p>- Địa chỉ : 436A/71 đường 3/2, Phường 12, Quận 10, Hồ Chí Minh.</p>
            <span>Mua </span>
            <Link>PC gaming, </Link>
            <Link>laptop gaming, </Link>
            <Link>cap màn hình, </Link>
            <Link>chuột máy tính, </Link>
            <Link>màn máy tính, </Link>
            <Link>máy tính để bàn, </Link>
            <Link>ghế gaming, </Link>
            <span>thiết bị chơi game như PS5 hàng đầu Việt Nam bảo hành chính hãng. Mua online nhận ưu đãi hấp dẫn với nhiều chương trình đặc biệt như ngày 8/3, b2s, noel...</span>
            <p>- Công ty TNHH Thương Mại Gearvn</p>
            <p>- GPKD số 0316517394 do Sở KH và ĐT TP Hồ Chí Minh cấp ngày 01/10/2020</p>
            <p>- GĐ/Sở hữu website: Tạ Thị Hà Mieeeeeeeeeee</p>
            <div className={cx('anh')}>
            <img src='https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=65147526-7602-46be-9047-e8c33f9fcbd3' alt=''/>
            </div>
        </div>
        <div className={cx('bot')}>
            <h3>FANPAGE</h3>
            <div className={cx('anhnen')}>
                <img src='https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/341907395_176984475240862_3947927635974065574_n.png?stp=dst-png_p130x130&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&_nc_ohc=KxNucmFrjNEAX9TR4KW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfB6AfU1UgqCXVkxs7nzqFLJchd6FZY4hnqmLlON-SGq2Q&oe=644E4A03' alt=''/>
                <div className={cx('logo-fb')}>
                    <img src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/299828745_2149865795186558_7764138146005553525_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=751413&_nc_ohc=FHp4mEQ7hs8AX8w8nQ_&_nc_ht=scontent.fdad3-5.fna&oh=00_AfCEIyiRBA53-GihPkyGbV8xJSbDwlQnxXhrz177JhZhug&oe=644E301E' alt=''/>
                    <div>
                        <Link>Gearvn <span><AiFillCheckCircle/></span></Link>
                        <p>487.426 lượt thích</p>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <button><span><FaFacebookSquare/></span> Thích trang</button>
                    <button><span><FaShare/></span> Chia sẻ</button>
                </div>
            </div>
            <div className={cx('scroll')}>
                <div className= {cx('cuc1')}>
                <div className={cx('img1')}>
                    <img src='https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/343500730_532546222288606_1033737397612286871_n.jpg?stp=cp1_dst-jpg_p296x100&_nc_cat=101&ccb=1-7&_nc_sid=8024bb&_nc_ohc=Lv-n7mxJKEUAX_dLLOi&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDue_LNUduV8rq0vcVlS3_Fkx_q68ZcNeIB4RNAwnSpmA&oe=644D29EB' alt=''/>
                </div>
                <div>
                    <div className={cx('top')}>
                    <img src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/299828745_2149865795186558_7764138146005553525_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=751413&_nc_ohc=FHp4mEQ7hs8AX8w8nQ_&_nc_ht=scontent.fdad3-5.fna&oh=00_AfCEIyiRBA53-GihPkyGbV8xJSbDwlQnxXhrz177JhZhug&oe=644E301E' alt=''/>
                    <div>
                        <Link>Gearvn <span><AiFillCheckCircle/></span></Link>
                        <p>khoảng hai giờ trước</p>
                    </div>
                    <span><FaFacebook/></span>
                    </div>
                </div>
                <div className={cx('left')}>
                    <p>Hôm nay được dịp bán nhiều i9 "chính hãng" nên khoe với anh em tí 😎😎</p>
                    <p>----------------------------------</p>
                    <Link>https://gearvn.com/pages/pc-gvn</Link>
                    <p>Xem thêm</p>
                </div>
                <hr></hr>
                <div className={cx('bottum')}>
                    <button><span><AiTwotoneLike/></span> 8</button>
                    <button><span><FaCommentAlt/></span> Bình luận</button>
                    <button><span><FaShare/></span> Chia sẻ</button>
                </div>
                </div>

                <div className= {cx('cuc1')}>
                <div className={cx('img1')}>
                    <img src='https://scontent.xx.fbcdn.net/v/t39.30808-6/340647752_177760181799163_8524258101385572937_n.jpg?stp=dst-jpg_p296x100&_nc_cat=106&ccb=1-7&_nc_sid=8024bb&_nc_ohc=U0CTlpDMsLQAX-zf0hj&_nc_oc=AQnSAnI3ctC2H3fP-3KQj5_nXneSv4at5lsSb_GNNfmVs_wxaKTOYkTj1upVrCmYLWk&_nc_ht=scontent.xx&edm=ANTofVoEAAAA&oh=00_AfCUXxl6_F5MHb8gWM2UgjnE0v0SNuho8J3jBonLoWP2hw&oe=643E5874' alt=''/>
                </div>
                <div>
                    <div className={cx('top')}>
                    <img src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/299828745_2149865795186558_7764138146005553525_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=751413&_nc_ohc=edO09gkBKlsAX9mTQFj&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfA5p-KvZGJfhqhADQm0WaxwcN3Rb_DFgoIBDgk60kPF6Q&oe=643C63DE' alt=''/>
                    <div>
                        <Link>Gearvn <span><AiFillCheckCircle/></span></Link>
                        <p>khoảng một giờ trước</p>
                    </div>
                    <span><FaFacebook/></span>
                    </div>
                </div>
                <div className={cx('left')}>
                    <p>Sở hữu ngay chiếc Laptop trang bị RTX 40 Series chưa bao giờ dễ dàng đến thế!🔥</p>
                    <p>🔰MSI Cyborg 15 A12VE 240VN chưa tới 28 củ khoai nhưng được trang bị cấu hình tối tân nhất trong phân khúc!</p>
                    <p>🔰Chip xử lý Intel Core i7-12650H đi đôi với Card đồ họa RTX 4050 mạnh mẽ, đảm bảo cân tốt tất cả các tựa Game hot hit nhất trên thị trường....</p>
                    <p>Xem thêm</p>
                </div>
                <hr></hr>
                <div className={cx('bottum')}>
                    <button><span><AiTwotoneLike/></span>13</button>
                    <button><span><FaCommentAlt/></span>1</button>
                    <button><span><FaShare/></span> Chia sẻ</button>
                </div>
                </div>

                <div className= {cx('cuc2')}>
                <div>
                    <div className={cx('top')}>
                    <img src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/299828745_2149865795186558_7764138146005553525_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=751413&_nc_ohc=edO09gkBKlsAX9mTQFj&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfA5p-KvZGJfhqhADQm0WaxwcN3Rb_DFgoIBDgk60kPF6Q&oe=643C63DE' alt=''/>
                    <div>
                        <Link>Gearvn <span><AiFillCheckCircle/></span></Link>
                        <p>khoảng một giờ trước</p>
                    </div>
                    <span><FaFacebook/></span>
                    </div>
                </div>
                <div className={cx('left')}>
                    <p>Ngonnnn</p>
                    <div className={cx('img2')}>
                    <img src='https://external.xx.fbcdn.net/emg1/v/t13/13830885917759103505?url=https%3A%2F%2Fgstatic.gvn360.com%2F2023%2F04%2FCounter-Strike-2-could-become-a-reality-later-this-month.jpg&fb_obo=1&utld=gvn360.com&stp=c0.5000x0.5000f_dst-emg0_p476x249_q75_u&ccb=13-1&oh=06_AbFL8PV9DjTM7Qdd-IPLK1XWyJK4p3PqYrUsm-aD452qWA&oe=643AED79&_nc_sid=6ac203' alt=''/>
                </div>
                </div>
                <hr></hr>
                <div className={cx('bottum')}>
                    <button><span><AiTwotoneLike/></span>11</button>
                    <button><span><FaCommentAlt/></span>Bình luận</button>
                    <button><span><FaShare/></span> Chia sẻ</button>
                </div>
                </div>
                <div className={cx('cuc4')}>
                    <span>Tìm chúng tôi trên facebook</span>
                    <span><TfiCommentsSmiley/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer