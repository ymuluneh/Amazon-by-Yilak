import React from 'react'
import css from './LowerHeader.module.css'
import { IoMdMenu } from "react-icons/io"; 

function LowerHeader() {
  return (
    <>
      <div className={css.lower_header}>
        <ul>
          <li>
            <IoMdMenu />
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Costemer Service</li>
          <li>Registery</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
}

export default LowerHeader