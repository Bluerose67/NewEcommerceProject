import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


const BlogItem = () => {
  return (
    <div className='blogItem group'>
        <div className="imgWrapper w-full overflow-hidden rounded-md
        relative">
            
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/8/1105_813/b-blog-6.jpg" alt="blog image" 
            className='w-full transition-all group-hover:scale-105 
            group-hover:rotate-1 cursor-pointer'/>
        
                <span className='flex items-center justify-center text-white
                absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md
                p-1 text-[11px] font-[500] gap-1'>
                    <IoTimeOutline className='text-[16px]'/> 5 April, 2025
                </span>
        </div>
        <div className="info py-4">
            <h2 className='text-[16px] font-[600] text-black'>

                <Link to="/" className='link'>
                        Exclusive Vr Set Available
                </Link>
            </h2>
            <p className='text-[12px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>

            <Link to="/" className="link font-[500] text-[14px] flex items-center gap-1">
            Read More <FaArrowRight />
            </Link>
        </div>
    </div>
  )
}

export default  BlogItem
