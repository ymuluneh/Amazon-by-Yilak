import React from 'react'
import Header from '../../Components/Heade/Header'
import CarouselComponent from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Catagory/Catagory'
import Products from '../../Components/Products/Products'

function Home() {
  return (
    <>
    <Header/>
    <CarouselComponent/> 
    <Catagory/>
    <Products/>
    

    </>
  )
}

export default Home