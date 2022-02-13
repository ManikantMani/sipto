import React from 'react';
import "./servicetool.css";
import toolimg from "../../images/tool1.png";
import tool2 from "../../images/tool2.png";
import tool3 from "../../images/tool3.png";
import tool4 from "../../images/tool4.png";
import tool5 from "../../images/tool5.png";
const ServiceTool = () => {
    return (
        <>
            <div className="tool_container">
                <div className="toolimgs">
                    <img src={toolimg} alt="tool-image" className='tool_img1 animated' />
                </div>
                <div className="tool_main">
                    <h1 className="tool_heading">
                        Fully decentralized. <br /> completely secure.</h1>
                    <p className="tool_p">We have all been in this industry too long not to make the <br /> security of your funds our absolute top priority.  That’s why, <br /> so far, we’ve spent upwards of $450k on audits from Open <br /> Zeppelin and Trail of Bits, as well as code reviews from white hats.</p>

                    <div className="tool_service_groups">
                        <div className="tool_service_group">
                            <div className="tool_service_content">
                                <img src={tool2} alt="tool" className="tool_img2" />
                                <div className="too_content_p">Constant reviews and <br /> testing of our platform</div>
                            </div>
                            <div className="tool_service_content">
                                <img src={tool3} alt="tool" className="tool_img2" />
                                <div className="too_content_p">Your funds are as secure as <br /> possible</div>
                            </div>
                        </div>
                        <div className="tool_service_group">
                            <div className="tool_service_content">
                                <img src={tool4} alt="tool" className="tool_img2" />
                                <div className="too_content_p">Fully decentralized and non- <br /> costodial</div>
                            </div>
                            <div className="tool_service_content">
                                <img src={tool5} alt="tool" className="tool_img2" />
                                <div className="too_content_p">Built by seasoned crypto <br /> veterans</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceTool