import React from 'react'
import classNames from 'classnames/bind'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {FaSearch} from 'react-icons/fa'
import {BsList} from 'react-icons/bs'

const cx = classNames.bind(style)



function Header() {

    const cartCount = useSelector((state) => state.addCartItem.quantity)
    console.log(cartCount);

  return (
    <div className={cx('header')}>
        <header>
            <div className={cx('top')}>
                <div className={cx('logo')}>
                    <Link to='/'> 
                        <img src='https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=35701' alt=''/>
                    </Link>
                </div> 
                <div className={cx('search-item')}>
                    <div className={cx('search-top')}>
                        <div className={cx('search')}>
                            <input placeholder='Nhập mã hoặc tên sản phẩm...'/>
                            <button><FaSearch/></button>
                        </div>
                        <div className={cx('list-item')}>
                            <ul>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=35701' alt=''/>
                                    <Link to='/register'>Đăng ký</Link>
                                </li>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=35701' alt=''/>
                                    <Link to='/login'>Đăng nhập</Link>
                                </li>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=35701' alt=''/>
                                    <a>Khuyến mãi</a>
                                </li>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=35701' alt=''/>
                                    <Link to='/cart'>Giỏ hàng</Link>
                                    <p className={cx('cart-count')}>{cartCount}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('nav')}>
                        <ul>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/tongdai-icon.png?v=35701' alt=''/>
                                <span>Tổng đài</span>
                            </li>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=35701' alt=''/>
                                <span>Video</span>
                            </li>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=35701' alt=''/>
                                <span>Tin công nghệ</span>
                            </li>
                            <li>
                                <img src='https://theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=35701' alt=''/>
                                <span>Tuyển dụng</span>
                            </li>
                            <li>
                                <img src='https://file.hstatic.net/200000397757/file/car-dealer_97df9ccd23f243e3a4da757eb19afe6c.png' alt=''/>
                                <span>Hệ thống SHOWROOM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx('bottom')}>
                <div className={cx('category')}>
                    <BsList/>
                    <span> Danh mục sản phẩm</span>
                </div>
                <ItemList children='hưỡng dân thanh toán'  url='https://theme.hstatic.net/1000026716/1000440777/14/xk2s.png?v=35701' />
                <ItemList children='Hưỡng dẫn trả góp' url='https://theme.hstatic.net/1000026716/1000440777/14/xk2s.png?v=35701' />
                <ItemList children='Chính sách bảo hành' url='https://theme.hstatic.net/1000026716/1000440777/14/xk4s.png?v=35701' />
                <ItemList children='Chính sách vận chuyển' url='https://theme.hstatic.net/1000026716/1000440777/14/xk5s.png?v=35701' />
            </div>
        </header>
    </div>
  )
}

const ItemList = ({url, children}) => {
    return(
        <div className={cx('same-btn')}>
            <img src={url} alt=''/>
            <span>{children}</span>
        </div>
    )
}

export default Header