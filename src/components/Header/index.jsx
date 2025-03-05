import React from 'react'
import { Link } from "react-router-dom" 
import logo from "../../assets/logo.jpg"
import Search from '../Search'
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <div>
      <header>
        <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className='text-[12px] font-[400]'>Get up to 50% off new season styles, limited time offer</p>
                    </div>

                    <div className=" col2 flex items-center justify-end">
                        <ul className='flex items-center gap-3'>
                            <li className='list-none'>
                                <Link to="/help-center" className='text-[13px] link font-[500]
                                transition'>Help Center</Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/order-tracking" className='text-[13px] link font-[500]
                                transition'>Order Tracking</Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/help-center" className='text-[13px] link font-[500]
                                transition'>Help Center</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="header py-3">
            <div className="container flex items-center justify-between">
                <div className="col1 w-[25%]">
                    <Link to={"/"}><img src={logo} alt="" /></Link>
                </div>
                <div className="col2 w-[45%]">
                    <Search/>
                </div>
                <div className="col3 w-[30%] flex items-center pl-7">
                    <ul className='flex items-center gap-3'>
                        <li className='list-none'>
                            <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link>
                             &nbsp; | &nbsp;
                            <Link to="/register" className='link transition text-[15px] font-[500]'> Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
