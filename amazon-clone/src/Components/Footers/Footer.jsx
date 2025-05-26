import React from "react";
import classes from "./footer.module.css"; 
import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    { title: "Amazon Music", description: "Stream millions of songs" },
    {
      title: "Amazon Ads",
      description: "Reach customers wherever they spend their time",
    },
    { title: "6pm", description: "Score deals on fashion brands" },
    { title: "AbeBooks", description: "Books, art & collectibles" },
    { title: "ACX", description: "Audiobook Publishing Made Easy" },
    { title: "Sell on Amazon", description: "Start a Selling Account" },
    { title: "Veeqo", description: "Shipping Software Inventory Management" },
    { title: "Amazon Business", description: "Everything For Your Business" },
    { title: "AmazonGlobal", description: "Ship Orders Internationally" },
    {
      title: "Amazon Web Services",
      description: "Scalable Cloud Computing Services",
    },
    {
      title: "Audible",
      description: "Listen to Books & Original Audio Performances",
    },
    { title: "Box Office Mojo", description: "Find Movie Box Office Data" },
    { title: "Goodreads", description: "Book reviews & recommendations" },
    { title: "IMDb", description: "Movies, TV & Celebrities" },
    {
      title: "IMDbPro",
      description: "Get Info Entertainment Professionals Need",
    },
    {
      title: "Kindle Direct Publishing",
      description: "Indie Digital & Print Publishing Made Easy",
    },
    {
      title: "Prime Video Direct",
      description: "Video Distribution Made Easy",
    },
    { title: "Shopbop", description: "Designer Fashion Brands" },
    { title: "Woot!", description: "Deals and Shenanigans" },
    { title: "Zappos", description: "Shoes & Clothing" },
    { title: "Ring", description: "Smart Home Security Systems" },
    { title: "eero WiFi", description: "Stream 4K Video in Every Room" },
    { title: "Blink", description: "Smart Security for Every Home" },
    { title: "Neighbors App", description: "Real-Time Crime & Safety Alerts" },
    {
      title: "Amazon Subscription Boxes",
      description: "Top subscription boxes – right to your door",
    },
    { title: "PillPack", description: "Pharmacy Simplified" },
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.footer_links}>
        <div className={` row ${classes.row}`}>
          {footerLinks.map((link, index) => (
            <div key={index} className={`col ${classes.col}`}>
              <Link to="#">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={`${classes.footer_copyright} footer_copyright `}>
        <div className={`${classes.legal_links} legal_links`}>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Consumer Health Data Privacy Disclosure</a>
          <a href="#">
            Your Ads Privacy Choices
            <span className={`checkbox_icon ${classes.checkbox_icon}`}>
              &#10004;
            </span>
          </a>
        </div>
        <p>© 1996-2025, yilakmuluneh.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
