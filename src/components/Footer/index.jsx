import React from 'react'
import { FaShippingFast } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='py-6 bg-[#fafafa] '>
        <div className="container">

            <div className="flex items-center justify-center gap-5">
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <FaShippingFast className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Free Shipping </h3> 
                        <p className='text-[12px] font-[500]'>
                            For all Orders Over $100
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <FaShippingFast className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> 30 Days Return </h3> 
                        <p className='text-[12px] font-[500]'>
                            For an Exchange Product
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <FaShippingFast className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Secured Payment </h3> 
                        <p className='text-[12px] font-[500]'>
                            Payment Cards Accepted
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <FaShippingFast className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Special Gifts </h3> 
                        <p className='text-[12px] font-[500]'>
                            Our First Product Order
                        </p>
                    </div>
                    <div className="col flex items-center justify-center flex-col
                    group w-[15%]">
                        <FaShippingFast className='text-[50px] transition-all duration-300 group-hover:text-[#ff5252]
                        group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-[600] mt-3'> Support 24/7 </h3> 
                        <p className='text-[12px] font-[500]'>
                            Contact us Anytime
                        </p>
                    </div>
                    
            </div>
        </div>
    </footer>
  )
}

export default Footer
