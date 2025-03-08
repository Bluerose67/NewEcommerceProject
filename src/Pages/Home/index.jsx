
import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../../components/ProductSlider';


const Home = () => {

   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider/>
      <HomeCatSlider/>

      <section className='bg-white py-8'>
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="leftSec">
              <h2 className='text-[20px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of march</p>
            </div>

            <div className="rightSec w-[60%]">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Electronics" />
                  <Tab label="Fashion" />
                  <Tab label="Leather Watch" />
                  <Tab label="Rolling Diamond" />
                  <Tab label="Furniture" />
                  <Tab label="Footwear" />
                  <Tab label="Purse" />
                  <Tab label="Gaming" />
                  <Tab label="Laptop Bags" />
                </Tabs>
            </div>

          </div>

          <ProductSlider items={5}/>

        </div>
      </section>

      <section className='py-16 bg-white '>
          <div className="container">
            <div className="freeShipping w-[80%] m-auto py-4 p-4 
            border-2 border-[#ff5252] flex items-center 
            justify-between rounded-md mb-7 ">
              <div className="col1 flex items-center gap-4">
                  <LiaShippingFastSolid className='text-[50px]'/>
                  <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
              </div>

              <div className="col2 flex items-center ">
                <p className='mb-0 font-[500]'>Free Delivery Now on Your First Order and Over $200</p>
              </div>
              <p className='font-bold text-[30px]'> - Only $200*</p>
            </div>

            <AdsBannerSlider items={2}/>
          </div>
      </section>

      <section className='py-5 bg-white'>
        <div className="container">
          <h2 className='text-[20px] font-[600]'>Latest Products</h2>
          <ProductSlider items={6}/>
        </div>
      </section>

      <br/> <br/> <br/> <br/>
    </>
  )
}

export default Home
