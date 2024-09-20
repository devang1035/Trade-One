import React from "react";
import Hero from "./Hero";
import Leftsec from "./Leftsec";
import Rightsec from "./Rightsec";
import Universe from "./Universe";

function Productpage() {
  return (
    <>
      <Hero />
      <Leftsec
        ImageUrl="media/kite.png"
        Title="Kite"
        Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Trydemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
      <Rightsec
        Title="Console"
        Description="The central dashboard for your TradeOne account. Gain insights into your trades and investments with in-depth reports and visualisations."
        ImageUrl="media/console.png"
        Link="Learn More"
      />
      <Leftsec
        ImageUrl="media/coin.png"
        Title="Coin"
        Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Trydemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
       <Rightsec
        Title="Kite Connect API"
        Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        ImageUrl="media\kiteconnect.png"
        Link="Kite Connect"
         />
      <Leftsec
        ImageUrl="media/varsity.png"
        Title="Varsity mobile"
        Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        GooglePlay=""
        AppStore=""
      />
      <p className="text-center">Want to know more about our technology stack? Check out the TradeOne.tech blog.</p>
      <Universe />
    </>
  );
}

export default Productpage;
