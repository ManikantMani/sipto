import React from 'react';
import "./coin.css"

const Coin = ({
    name, image, symbol, price, volume, priceChange, marketcap
}) => {
    return <>
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="coinName" />
                    <div className='name-symbol'>
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                </div>
                <div className="coin-data">
                    <div className="price-vol">
                        <p className="coin-price">Price- $ {price}</p>
                        <p className="coin-volum">Volume- $ {volume.toLocaleString()}</p>
                    </div>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">Rate-({priceChange.toFixed(2)})%</p>
                    )
                        : (<p className="coin-percent green">Rate-({priceChange.toFixed(2)})%</p>
                        )}
                    <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>


                        {/* for card view in mobile */}

            <div className="card_view">
                <div className="card_div_1">
                    <div className="card_div_up">
                        <div className="coin">
                            <img src={image} alt="coinName" />
                        </div>
                        <div className='name-symbol'>
                            <h1>{name}</h1>
                            <p className="coin-symbol">{symbol}</p>
                        </div>

                        <div className="price-vol">
                        <p className="coin-price">Price- $ {price}</p>
                        <p className="coin-volum">Volume- $ {volume.toLocaleString()}</p>
                    </div>

                    </div>
                    <div className="card_div_down">
                        <div className="card_price_div">
                        {priceChange < 0 ? (
                        <p className="coin-percent red">Rate-({priceChange.toFixed(2)})%</p>
                    )
                        : (<p className="coin-percent green">Rate-({priceChange.toFixed(2)})%</p>
                        )}
                        </div>
                    </div>
                    <div className="card_mar_cap">
                    <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Coin;
