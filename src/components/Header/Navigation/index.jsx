import React, {useState} from 'react'
import CategoryPanel from './CategoryPanel';
import Button from '@mui/material/Button';
import { RiMenu2Line } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom" 
import { GoRocket } from "react-icons/go";
import "../Navigation/style.css"




const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel=() => {
            setIsOpenCatPanel(true);
    }

  return (
    <>
    <nav >
        <div className="container flex items-center justify-end gap-8">
            <div className="col_1 w-[20%]">
                <Button variant="text" className='!text-black gap-2 w-full'
                onClick={openCategoryPanel}
                ><RiMenu2Line className='text-[18px]'/>
                Shop by Categories <LiaAngleDownSolid className='text-[13px] ml-auto font-bold'/>
                </Button>
            </div>
            <div className="col_2 w-[60%]">
                <ul className='flex items-center gap-4 nav'>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'> Home </Button> 
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'>Fashion </Button>
                        </Link>

                        <div className="submenu absolute top=[120%] left-[0%] min-w-[200px] bg-white
                        shadow-md opacity-0 transition-all">
                            <ul>
                                <li className='list-none w-full relative'>
                                    <Link to="/" className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                    !text-left !justify-start !rounded-none '>
                                        Men
                                    </Button>
                                    <div className="submenu absolute top=[0%] left-[100%] min-w-[200px] bg-white
                                        shadow-md opacity-0 transition-all">
                                            <ul>
                                                <li className='list-none w-full '>
                                                    <Link to="/" className='w-full'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                                    !text-left !justify-start !rounded-none'>
                                                        T-shirt
                                                    </Button>
                                                    </Link>
                                                </li>
                                                <li className='list-none w-full !text-left !justify-start'>
                                                    <Link to="/" className='w-full'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                                    !text-left !justify-start !rounded-none'>
                                                        Jeans
                                                    </Button>
                                                    </Link>
                                                </li>
                                                <li className='list-none w-full !text-left !justify-start'>
                                                    <Link to="/" className='w-full'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                                    !text-left !justify-start !rounded-none'>
                                                        Footwear
                                                    </Button>
                                                    </Link>
                                                </li>
                                                <li className='list-none w-full !text-left !justify-start'>
                                                    <Link to="/" className='w-full'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                                    !text-left !justify-start !rounded-none'>
                                                        Watch
                                                    </Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                    </div>
                                    </Link>
                                </li>
                                <li className='list-none w-full !text-left !justify-start'>
                                    <Link to="/" className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                    !text-left !justify-start !rounded-none'>
                                        Women
                                    </Button>
                                    </Link>
                                </li>
                                <li className='list-none w-full !text-left !justify-start'>
                                    <Link to="/" className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full 
                                    !text-left !justify-start !rounded-none '>
                                        Kids
                                    </Button>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'>Electronics </Button></Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'>Bags</Button> 
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'> Footwear </Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'> Groceries </Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'> Beauty </Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'> Wellness </Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition text-[14px] font-[500]'> 
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                        hover:!text-[#ff5252] !py-3'> Jewellery </Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col_3 w-[20%]">
                <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
                    <GoRocket className='text-[18px]' />
                    Free International Delivery
                </p>
            </div>
        </div>
    </nav>
    <CategoryPanel 
    isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel = {setIsOpenCatPanel}
    />
    </>
  )
}

export default Navigation
