import React from 'react'
import classNames from 'classnames/bind'
import style from './CustomInput.module.scss'

const cx = classNames.bind(style)


function CustomInput({place, avt}) {
  return (
    <div className={cx('wrapper')}>
        <div>{avt} </div>
        <input placeholder={place}/>
    </div>
  )
}

export default CustomInput