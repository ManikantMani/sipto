import React from 'react';
import "./service.css"
import finance from "../../images/bitcoin.png"
import blockchain from "../../images/blockchain.png"
import marketNews from "../../images/market-news.png"
import exchange from "../../images/exchange.png"

const Service = () => {
  return (
    <>
        <div className="service_container">
            <div className="service_main">
                <img src={finance} alt="service-image" className="service_img1" />
                <p className="service_type">ICO Finance</p>
                <p className="service_detail">The highly the not having with lively Our up with.</p>
            </div>
            <div className="service_main">
                <img src={blockchain} alt="service-image" className="service_img2" />
                <p className="service_type">Blockchain</p>
                <p className="service_detail">The highly the not having with lovely Our up with.</p>
            </div>
            <div className="service_main">
                <img src={marketNews} alt="service-image" className="service_img3" />
                <p className="service_type">Market News</p>
                <p className="service_detail">The highly the not having with lovely Our up with.</p>
            </div>
            <div className="service_main">
                <img src={exchange} alt="service-image" className="service_img4" />
                <p className="service_type">Exchange Offer</p>
                <p className="service_detail">The highly the not having with lovely Our up with.</p>
            </div>
        </div>
    </>
  )
}

export default Service