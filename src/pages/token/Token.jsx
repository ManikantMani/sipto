import React from 'react';
import { NavLink } from 'react-router-dom';
import "./token.css"

const Token = () => {
    return (
        <>
            <div className="token_container">
                <div className="token_main">
                    <h1 className="token_header">Join the future of algorithmic <br /> crypto trading stategies</h1>
                    <h2 className="token_h2">$150B Target cap $99B Raised</h2>
                    <p className="token_p">Just because you call something a blockchain or an ICO, that <br />
                        dosen't means you aren't subject to normal Laws.
                    </p>
                    <div className="button_groups">
                       <NavLink to='/status'><button className="whitepaper_button">Coin-Status</button></NavLink>
                       <button className="video_intro"><i class="fa-solid fa-play"></i></button>
                        <span className='video_intro_name'>INTRO VIDEO</span>
                    </div>
                </div>
                <div className="tokn_card_container">
                <div className="token_card">
                    <h3 className="token_card_heading">SELL ENDS IN</h3>
                    <div className="token_card_timing">
                    <div className="token_card_time">
                        <div className="time_box_group">
                            <div className="time_box1">00</div>
                            <div className="time_box1">09</div>
                            <div className="time_box1">30</div>
                            <div className="time_box1">18</div>
                        </div>
                        <div className="time_name_group">
                            <div className="time_box_name">DAY</div>
                            <div className="time_box_name">HOURS</div>
                            <div className="time_box_name">MINUTES</div>
                            <div className="time_box_name">SECONDS</div>
                        </div>
                    </div>
                    <div className="token_time_line"></div>
                    <p className="about_token_time">$11,087 Purchages of $25,000 goal</p>
                    <div className="purchage_type">
                    <div className="purchage_coin_type">
                    <i class="fa-solid fa-credit-card"></i>
                    </div>
                    <div className="purchage_coin_type">
                    <i class="fa-brands fa-bitcoin"></i>
                    </div>
                    <div className="purchage_coin_type">
                    <i class="fa-brands fa-ethereum"></i>
                    </div>
                    </div>
                   <NavLink to='/vaulet'><button className="purchages_token">PURCHAGES TOKENS</button></NavLink>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Token

