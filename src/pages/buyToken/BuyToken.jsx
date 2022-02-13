import React from 'react';
import "./buyToken.css";
import { NavLink } from 'react-router-dom';

const BuyToken = () => {
    return (
        <>
            <div className="buy_container_main">
                <div className="buy_container">
                    <div className="buy_main">
                        <div className="buy_currency_equal">
                            <div className="equal"><p>1 CCC = 0.0005 BTC</p></div>
                            <div className="currency_bonus"><p>CURRENT BONUS: +20%</p></div>
                        </div>
                        <div className="currency_quantity">
                            <div className="buy_input">
                                <input type="number" className='input_number' placeholder='Enter Currency Value...' />
                            </div>
                            <div className="on_input">
                                <p>+2000 CCC</p>
                            </div>
                        </div>
                        <div className="select">
                            <label htmlFor="Coins">Chose a currency :</label>
                            <select name="Coins" id="Coins">
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETH</option>
                                <option value="USDC">USDC</option>
                                <option value="XRP">XRP</option>
                            </select>
                        </div>
                        <button className="buy_button_iner">Buy</button>
                        
                    </div>
                </div>
                <div className="send_container">
                <div className="send_container_main">
                    <div className="send_main">
                        <h2>ALREADY RAISED</h2>
                        <h1>1490 BTC</h1>
                        <p className="hover_mouse">
                            You have still gain <br /> <span className="hover_mouse_bold">+20% TFL bonus</span>
                        </p>
                    </div>
                    
                    <button className='send_button_btn'>Send ETH directly</button>

                </div>
            </div>
            </div>
        </>
    )
}

export default BuyToken;