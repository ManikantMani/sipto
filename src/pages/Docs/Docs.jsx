import React from 'react';
import "./docs.css";
import docs1 from '../../images/docs1.png'
import docs2 from '../../images/docs2.png'
import docs3 from '../../images/docs3.png'
import docs4 from '../../images/docs4.png'
import docs5 from '../../images/docs5.png'
import docs6 from '../../images/docs6.png'

const Docs = () => {
  return (
    <>
      <div className="docs_container">
        <div className="docs_div">
          <div className="docs_content">
            <img className='docs_img' src={docs1} alt="Doc-images" />
            <p className="docs_p">A new transaction entered.</p>
          </div>
          <div className="docs_arrow">
          <i class="fa-solid fa-arrow-right-long"></i>
          </div>
          <div className="docs_content">
            <img className='docs_img' src={docs2} alt="Doc-images" />
            <p className="docs_p">The transaction is then <br /> transmitted to a network of <br /> peer-to-peer computers <br /> scatted across world.</p>
          </div>
          <div className="docs_arrow">
          <i class="fa-solid fa-arrow-right-long"></i>
          </div>
          <div className="docs_content">
            <img className='docs_img' src={docs3} alt="Doc-images" />
            <p className="docs_p">This network of computers then <br /> solves equations to conform the <br /> validity of the transaction.</p>
          </div>
        </div>
        
        <div className="docs_down_arrow">
        <i class="fa-solid fa-arrow-down-long"></i>
        </div>
        <div className="docs_div">
        <div className="docs_content">
            <img className='docs_img' src={docs6} alt="Doc-images" />
            <p className="docs_p">The transaction is complete.</p>
          </div>
          <div className="docs_arrow">
          <i class="fa-solid fa-arrow-left-long"></i>
          </div>
          <div className="docs_content">
            <img className='docs_img' src={docs5} alt="Doc-images" />
            <p className="docs_p">These blocks are then chained <br /> together creating a long history <br />of all transaction that are <br /> permanent.</p>
          </div>
          <i class="fa-solid fa-arrow-left-long"></i>
          <div className="docs_content">
            <img className='docs_img' src={docs4} alt="Doc-images" />
            <p className="docs_p">Once confirmed to be iegitimate <br /> transaction. They are clustered <br /> together into blocks.</p>
          </div>
          </div>
      </div>
    </>
  )
}

export default Docs;