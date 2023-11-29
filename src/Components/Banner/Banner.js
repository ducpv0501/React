import React from 'react'
import classNames from 'classnames/bind'
import style from './Banner.module.scss'

const cx = classNames.bind(style)


function Banner({url}) {
  return (
    <div className={cx('wrapper')}>
      <img src={url} alt=''/>
    </div>
  )
}

export default Banner