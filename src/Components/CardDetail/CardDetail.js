import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/addCartSlide'
import { Link, useParams, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Header from '../Layouts/Header'
import style from './CardDetail.module.scss'
import Button from '../Button/Button'

const cx = classNames.bind(style)


function CardDetail() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {id} = useParams()

  const [dataLaptop, setDataLaptop] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:4000/productSale/${id}`)
      .then(res => setDataLaptop(res.data))
      .catch(error => console.log(error))

  }, [])


  const handleAddCart = (e) => {
    e.preventDefault()
    const add = {
      productImg: dataLaptop?.imgUrl,
      productName: dataLaptop?.name,
      quantity: 1,
      price: dataLaptop?.price
    }

    dispatch(addCart(add))
    navigate("/cart")

    console.log(add);
  }

  return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
              <div className={cx('slide-img')}> 
                <div className={cx('slide')}>
                    <Carousel 
                      infiniteLoop={true}
                      autoPlay={true}
                      showThumbs={true}
                      // thumbWidth={63}
                      showStatus={false}
                      transitionTime={1}
                      stopOnHover={true}
                      width={625}
                      showIndicators={false}
                    >
                      {dataLaptop?.carouseDetail?.map(item => (
                        <div key={item.id} style={{ width: "100%" }}>
                          <img src={item.carouseUrl} alt=''/>
                      </div>
                      ))}
                    </Carousel>
                  </div>
  
              </div>
              <div className={cx('detail')}>
                <h2>{dataLaptop?.name}</h2>
                <p>✔ Bảo hành chính hãng 36 tháng. </p>
                <p>✔ Hỗ trợ đổi mới trong 7 ngày. </p>
                <p>✔ Windows bản quyền tích hợp. </p>
                <p>✔ Windows bản quyền tích hợp. </p>
                <hr></hr>
                <p>
                  <strong>Quà tặng:</strong>
                </p>
                <p className={cx('strong')}>🎁 Balo Lenovo Legion Recon Gaming.</p>
                <p className={cx('strong')}>🎁 Voucher mua Ram Laptop trị giá 500,000đ ( Từ 01.04 đến 30.04.2023)</p>
                <p className={cx('strong')}>🎁 "Lenovo Week", Tai nghe True Wireless Soundpeats Mac trị giá 890,000đ (Từ 19.04 đến 28.04.2023)</p>
                <hr></hr>
                <h4>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON (<Link>Xem chi tiết</Link>).</h4>
                <form>
                  <p>
                    <span>Giá cũ: </span>
                    <del>{dataLaptop.oldPrice} đ</del>
                  </p>
                  <p>
                    <span>Giá mới: </span>
                    <span className={cx('price')}>{dataLaptop.price} đ</span>
                  </p>
                  <button onClick={handleAddCart}>Đặt hàng</button>
                </form>
              </div>
            </div>

            <hr></hr>

            <div className={cx('bottom')}>
              <h2>Thông số kĩ thuật</h2>
                <table 
                  border={1}
                  cellPadding={3}
                  cellSpacing={0}
                > 
                  <tbody>
                    <tr>
                      <td className={cx('name')}>Mainboard</td>
                      <td className={cx('description')}> {dataLaptop.mainboard}</td>
                    </tr>
                    <tr>
                      <td className={cx('name')}>CPU</td>
                      <td className={cx('description')}> {dataLaptop.cpu}</td>
                    </tr>
                    <tr>
                      <td className={cx('name')}>RAM</td>
                      <td className={cx('description')}>{dataLaptop.ram}</td>
                    </tr>
                    <tr>
                      <td className={cx('name')}>VGA</td>
                      <td className={cx('description')}>{dataLaptop.vga}</td>
                    </tr>
                    <tr>
                      <td className={cx('name')}>Display</td>
                      <td className={cx('description')}>{dataLaptop.display}</td>
                    </tr>

                  </tbody>
                </table>
              </div>

        </div>
  )
}

export default CardDetail