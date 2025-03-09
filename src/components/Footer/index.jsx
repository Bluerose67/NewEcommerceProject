import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { PiBoxArrowDown } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoIosChatboxes } from "react-icons/io";





const Footer = () => {
  return (
    <footer className='py-6 bg-[#fafafa] '>
        <div className="container">

            <div className="flex items-center justify-center gap-5 
            py-8 pb-8">
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <FaShippingFast className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Free Shipping </h3> 
                        <p className='text-[12px] font-[500]'>
                            For all Orders Over $100
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <PiBoxArrowDown  className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> 30 Days Return </h3> 
                        <p className='text-[12px] font-[500]'>
                            For an Exchange Product
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <LiaWalletSolid className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Secured Payment </h3> 
                        <p className='text-[12px] font-[500]'>
                            Payment Cards Accepted
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Special Gifts </h3> 
                        <p className='text-[12px] font-[500]'>
                            Our First Product Order
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Support 24/7 </h3> 
                        <p className='text-[12px] font-[500]'>
                            Contact us Anytime
                        </p>
                    </div>
                    
            </div>

            <hr />


            <div className="footer flex items-center py-8">
                    <div className="part1">
                        <h2 className='text-[20px] font-[600] mb-4'> Contact Us</h2>
                        <p className='text-[13px] font-[400] pb-4'>ClassyShop - Mega Super store <br /> 
                            507-Union Trade Center France
                        </p>

                        <Link to="mailto:someone@example.com" className='link text-[13px]'>
                            sales@yourcomapny.com
                        </Link>

                        <span className='text-[22px] font-[600] block 
                        w-full mt-3 mb-5 text-[#ff5252]'> (+91) 9876-543-210</span>
                    
                        <div className="flex items-center gap-2"> 
                            <IoIosChatboxes className='text-[40px] text-[#ff5252]'/>
                            <span className='text-[16px] font-[600]'>
                                Online Chat <br />
                                Get Expert Help
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
