import React from 'react'

import classNames from 'classnames/bind'
import style from './Image.module.scss'

const cx = classNames.bind(style)

function Image({url}) {
  return (
    <div className={cx('wrapper')}>
        <img className={cx('img')} src={url} alt=''/>
    </div>
  )
}

export default Image