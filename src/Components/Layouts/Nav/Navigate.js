import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from 'classnames/bind'


import style from './Navigate.module.scss'
import NavIcon from '../../NavIcon'
import Image from '../../Image'

const cx = classNames.bind(style)

function Navigate() {

  const [slides, setSlides] = useState([])



  useEffect(() => {
    axios.get('https://backoffice.nodemy.vn/api/homepage?populate=*')
      .then(res => setSlides(res.data.data))
      .catch(error => console.log(error))
  }, [])


  return (
    <div className={cx('wrapper')}> 
        <div className={cx('left')}>
          <NavIcon text='laptop' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=35725' />
          <NavIcon text='laptop gaming' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=35725' />
          <NavIcon text='pc km đặc biệt' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=35725' />
          <NavIcon text='pc gaming' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=35725' />
          <NavIcon text='pc đồ họa' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=35725' />
          <NavIcon text='pc doanh nghiệp' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx26.png?v=35725' />
          <NavIcon text='linh kiện pc' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx27.png?v=35725' />
          <NavIcon text='apple' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=35725' />
          <NavIcon text='màn hình' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx29.png?v=35725' />
          <NavIcon text='bàn phím' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=35725' />
          <NavIcon text='chột + Lót chuột' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx211.png?v=35725' />
          <NavIcon text='tai nghe + loa' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx112.png?v=35725' />
          <NavIcon text='ghế - bàn' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx213.png?v=35725' />
          <NavIcon text='phần mền & mạng' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx214.png?v=35725' />
          <NavIcon text='phụ kiện' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx215.png?v=35725' />
          <NavIcon text='giải đáp' url='https://theme.hstatic.net/1000026716/1000440777/14/xxx216.png?v=35725' />
        </div>
        <div className={cx('right')}>
          <div className={cx('slide')}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
              >
                {slides?.attributes?.leftBanner?.data.map((item, index) => (
                  <img key={index} src={`https://backoffice.nodemy.vn${item.attributes.formats.medium.url}`} alt='' />
                ))}
              </Carousel>

            <div className={cx('img-slide')}>
              <Image url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=35725' />
              <Image url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=35725' />
            </div>
          </div>
          <div className={cx('list-img')}>
            <Image url='https://theme.hstatic.net/1000026716/1000440777/14/solid1.jpg?v=35725' />
            <Image url='https://theme.hstatic.net/1000026716/1000440777/14/solid2.jpg?v=35725' />
            <Image url='https://theme.hstatic.net/1000026716/1000440777/14/solid3.jpg?v=35725' />
          </div>
        </div>
    </div>
  )
}

export default Navigate