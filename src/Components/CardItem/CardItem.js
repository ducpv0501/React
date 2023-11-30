import React from 'react'
import classNames from 'classnames/bind'
import  {Link} from 'react-router-dom'

import style from './CardItem.module.scss'

const cx = classNames.bind(style)

function CardItem({value}) {

  const oldPrice = value.oldPrice
  const price = value.price

  const disCount = Math.floor(((oldPrice - price) / oldPrice) *100)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  return (
    <div className={cx('wrapper')}>
        <div className={cx('content')}>
            <Link to={`/card/${value.id}`} className={cx('img')}>
              <img src={value.imgUrl} alt=''/>
              <div className={cx('popup')}>
                <Link to={`/card/${value.id}`}>Click xem chi tiết</Link>
                <Link to={`/card/${value.id}`}>Đặt hàng</Link>
              </div>
            </Link>
            <h2>{value.name}</h2>
            <div className={cx('price')}>
                <del>{ formatPrice(value.oldPrice)} </del>
                <span>{formatPrice(value.price)} </span>
                <div className={cx('sale')}>
                  -
                  {disCount}
                  %
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardItem