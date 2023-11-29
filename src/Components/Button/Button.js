import React from 'react'
import classNames from 'classnames/bind'
import style from './Button.module.scss'

const cx = classNames.bind(style)

function Button({text, click}) {
  return (
    <>
        <button className={cx('button')}>{text}</button>
    </>
  )
}

export default Button