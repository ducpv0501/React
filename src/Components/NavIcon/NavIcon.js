import React from 'react'
import classNames from 'classnames/bind'
import style from './NavIcon.module.scss'

const cx = classNames.bind(style)



function NavIcon({text, url}) {
  return (
    <div className={cx('wrapper')}>
        <img src={url} alt=''/>
        <span>{text}</span>
    </div>
  )
}

export default NavIcon