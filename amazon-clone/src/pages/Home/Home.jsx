import React from 'react'

import CarouselComponent from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Catagory/Catagory'
import Products from '../../Components/Products/Products'
import Layout from '../../Components/Layout/Layout'

function Home() {
  return (
    <>
        <CarouselComponent />
        <Catagory />
        <Products />
    
    </>
  );
}

export default Home