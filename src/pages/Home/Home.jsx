import React from 'react';
import "./home.css";
import home from "../../images/bg4.png";
import Service from '../service/Service';
import ServiceTool from '../serviceTool/ServiceTool';
import { NavLink } from 'react-router-dom';
// import bg from "../../images/bg.png";

const Home = () => {
  return (
    <>
    <div className="home">
        <div className="home_contaier" >
            <div className="home_main">
            <div className="home_content">
                <h3 className="home_h3">
                    built on eth. powered by you.
                </h3>
                <h1 className="home_h1">
                    The Future of <br /> Perpetuals Is Here
                </h1>
                <p className="home_p">
                Leverage on any tokens with a protocol trusted with billions <br /> for its price execution, super low fees and reliability.
                </p>
            </div>
            <div className="button_group">
               <NavLink to= '/token'><button className="trading_button">Start Trading</button></NavLink>
               <NavLink to='/vaulet'><button className="liquidity_button">Add Liquidity</button></NavLink> 
            </div>
            </div>
            <div className="home_img">
            <img src={home} className= 'img-fluid animated' alt="home-image" />
            </div>
            
            </div>
            <div className="home_number">
                <div className="number_div">
                    <div className="font_awesome">
                    <i className="fa-solid fa-chart-column"></i>
                    <div className="number">
                    <h2 className="number_count">$30B</h2>
                    <p className="number_detail">Digital Currency Exchanged</p>
                    </div>
                    </div>
                </div>
                <div className="number_div">
                    <div className="font_awesome">
                    <i class="fa-solid fa-user"></i>
                    <div className="number">
                    <h2 className="number_count">10M+</h2>
                    <p className="number_detail">Trusted Website Investor</p>
                    </div>
                    </div>
                </div>
                <div className="number_div">
                    <div className="font_awesome">
                    <i class="fa-solid fa-earth-americas"></i>
                    <div className="number">
                    <h2 className="number_count">195</h2>
                    <p className="number_detail">Countries Supported</p>
                    </div>
                    </div>
                </div>
            </div>
            <Service />
            <ServiceTool />
        </div>
        
    </>
  )
}

export default Home