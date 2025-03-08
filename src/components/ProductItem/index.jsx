
import React from 'react'
import "../ProductItem/style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button  from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';




const ProductItem = () => {
  return (
    <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
      <div className="group imgWrapper w-[100%] overflow-hidden rounded-md
      relative">

        <Link to="/">
            <div className="img h-[250px] overflow-hidden">

                <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg
                " className='w-full ' alt="" />

                <img src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg
                " className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0
                group-hover:opacity-100' alt="" />
            </div>
        </Link>

        <span className='discount flex items-center absolute top-[10px] left-[10px] 
        z-50 bg-[#ff5252] text-white rounded-md p-2 text-[12px]
        font-[500]'>10%</span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 
        flex items-center gap-4 flex-col w-[50px] transition-all
        duration-300 group-hover:top-[15px] opacity-0 
        group-hover:opacity-100">

            <Button className='!w-[35px] !h-[35px] !min-w-[40px]
            !rounded-full !bg-white text-black hover:!bg-[#ff5252]
             hover:!text-white group'> 
                <FaRegHeart className='text-[18px] !text-black 
                group-hover:text-white hover:!text-white'/>
            </Button>

        
            <Button className='!w-[35px] !h-[35px] !min-w-[40px]
            !rounded-full !bg-white text-black hover:!bg-[#ff5252]
             hover:!text-white group'>
                <IoIosGitCompare className='text-[18px] !text-black 
                group-hover:text-white hover:!text-white' />
            </Button>
            <Button className='!w-[35px] !h-[35px] !min-w-[40px]
            !rounded-full !bg-white text-black hover:!bg-[#ff5252]
             hover:!text-white group'> 
                <MdZoomOutMap className='text-[18px] !text-black 
                group-hover:text-white hover:!text-white'/>
            </Button>

        </div>

      </div>

      <div className="info p-3 py-5 shadow-sm">
        <h6 className='text-[13px]'> 
            <Link to="/" className='link transition-all'> Meno </Link> 
        </h6>
        <h3 className='text-[13px] title mt-1 mb-1 font-[500]
         text-[rgba(0,0,0,0.9)]'> 
            <Link to="/" className='link transition-all'>
            Men Alias-N Regular Fit Spread Collar Shirt </Link> 
        </h3>

           <Rating name="size-small" defaultValue={4} size="small" readOnly/>

           <div className="flex items-center gap-4">
                <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>Rs. 1000</span>
                <span className='price text-[#ff5252] text-[15px] font-[600]'>Rs. 750</span>
           </div>
      </div>
    </div>
  )
}

export default ProductItem
