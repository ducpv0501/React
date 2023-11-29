import React, { useState } from 'react'
import classNames from 'classnames/bind'
import style from './Cart.module.scss'
import { useSelector } from 'react-redux'
import {BsFillTrashFill} from 'react-icons/bs'



const cx = classNames.bind(style)


function Cart() {

    const cartValues = useSelector( (state) => state.addCartItem.productCart)
    const cartTotal = useSelector( (state) => state.addCartItem.totalPrice)

    

    console.log(Array.isArray(cartValues));


  return (
        <div className={cx('cart')}>
            <h2>Giỏ hàng</h2>
            <div className={cx('list-product')}>
                {
                    cartValues && cartTotal 
                    ?
                        <table>
                            <thead>
                                <tr>
                                    <td>Sản phẩm</td>
                                    <td>Tên sản phẩm</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá</td>
                                    <td>Xóa</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cartValues.map((cartValue) => (
                                    <CartList name={cartValue.productName} url={cartValue.productImg} price={cartValue.price} />
                                ))}
                                <tr>
                                    <td className={cx('total')} colSpan={4}>Tổng tiền:</td>
                                    <td>{cartTotal}</td>
                                </tr>
                            </tbody>
                        </table>
                    :
                        <h3>Không có sản phẩm nào trong giỏ hàng!</h3>
                }
            </div>
        </div>
  ) 
}

export default Cart


const CartList = ({price, url, name}) => {
    return (
        <tr>
            <td>
                <div>
                    <img src={url} alt=''/>
                </div>
            </td>
            <td>{name}</td>
            <td>1</td>
            <td>{price}</td>
            <td className={cx('delete')}><BsFillTrashFill/></td>
        </tr>
    )
}