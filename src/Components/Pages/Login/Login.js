import React from 'react'
import classNames from 'classnames/bind'
import style from './Login.module.scss'
import { Link } from 'react-router-dom'
import {HiOutlineMail, HiLockClosed} from 'react-icons/hi'

import Header from '../../Layouts/Header'
import CustomInput from '../../CustomInput/CustomInput'
import Button from '../../Button/Button'



const cx = classNames.bind(style)


function Login() {
  return (
        <div className={cx('wrapper')}>
            <h1>Đăng nhập</h1>
            <CustomInput avt={<HiOutlineMail/>} place='Email'/>
            <CustomInput avt={<HiLockClosed/>} place='Mật khẩu'/>
            <Button text='Đăng nhập'/>
            <div>
                <Link>Quên mật khẩu?</Link>
                <span>hoặc</span>
                <Link to='/register'>Đăng ký</Link>
            </div>
        </div>
  )
}

export default Login