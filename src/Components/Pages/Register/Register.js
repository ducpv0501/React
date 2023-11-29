import React from 'react'
import classNames from 'classnames/bind'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {MdPhoneIphone} from 'react-icons/md'
import {TiLockClosed} from 'react-icons/ti'
 
import style from './Register.module.scss'
import Header from '../../Layouts/Header'
import CustomInput from '../../CustomInput'
import Button from '../../Button'

const cx = classNames.bind(style)


function Register() {
  return (

      <div className={cx('wrapper')}>
          <h1>Tạo tài khoản</h1>
            <CustomInput avt={<BsFillPersonFill/>} place='Họ'/>
            <CustomInput avt={<BsFillPersonFill/>} place='Tên'/>
            <CustomInput avt={<MdEmail/>} place='Email'/>
            <CustomInput avt={<MdPhoneIphone/>} place='Phone'/>
            <CustomInput avt={<TiLockClosed/>} place='Mật Khẩu'/>
            <div>
              <Button text='Đăng ký'/>
              <Button text='Quay về'/>
            </div>
      </div>
  )
}

export default Register