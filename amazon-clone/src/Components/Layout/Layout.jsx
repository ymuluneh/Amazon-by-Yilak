import React from 'react'
import Header from "../Heade/Header"
import { Outlet } from 'react-router-dom';
import PersonalizedInfo from '../personalized/PersonalizedInfo';
import BackToTope from '../BackToTope/BackToTope';
import Upper from '../Footers/Upper';
import Middel from '../Footers/Middel';
import Footer from '../Footers/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <PersonalizedInfo/>
      <BackToTope/>
      <Upper/>
      <Middel/>
      <Footer/>
    </div>
  );
}

export default Layout