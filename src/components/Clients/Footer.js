import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Clients/footer.css';
import '../../assets/css/Clients/client.css';




function Footer() {
  return (
    <div className='row m-0 px-lg-5 px-4 py-5' style={{backgroundColor:'#FFFFFF'}}>
        <div className='col-12 p-0'>
            <img src="/images/MewCom_Text_Logo.png" id="footer-logo" alt="Logo" className="img-fluid desktop-widget" style={{width:'13%'}} />
            <div className='mobile-widget' style={{textAlign:'center'}}>
                <img src="/images/MewCom_Text_Logo.png" id="footer-mobile-logo" alt="Logo"className="img-fluid" style={{width:'50%'}} />

            </div>
        </div>

        <div className='col-lg-3 col-xs-12 p-0 mt-5 d-flex flex-row justify-content-center align-items-start'>
            <div>
                <p className="font-size-24 dosis-semibold mb-3" style={{color:'#252525'}}>Company</p>
                <p onClick={()=> window.open("/", "_self")} className="font-size-18 dosis-regular mb-3" style={{color:'#252525',cursor:'pointer'}}>About Us</p>
                <p onClick={()=> window.open("/", "_self")} className="font-size-18 dosis-regular mb-3" style={{color:'#252525',cursor:'pointer'}}>Our Product</p>
                <p onClick={()=> window.open("/", "_self")} className="font-size-18 dosis-regular mb-3" style={{color:'#252525',cursor:'pointer'}}>Terms and Conditions</p>
                <p onClick={()=> window.open("/", "_self")} className="font-size-18 dosis-regular mb-3" style={{color:'#252525',cursor:'pointer'}}>Privacy Policy</p>
            </div>
        </div>

        <div className='col-lg-3 col-xs-12 p-0 mt-5 d-flex flex-row justify-content-center align-items-start'>
            <div>
                <p className="font-size-24 dosis-semibold mb-3" style={{color:'#252525'}}>Get in touch</p>
                <div className='d-flex'>
                    <div className='mr-3'>
                        <img onClick={()=> window.open("/", "_self")} src="/images/icons/instagram_icon.png" id="footer-social-logo" alt="Logo"className="img-fluid" style={{width:'25px',cursor:'pointer'}} />
                    </div>
                    <div className='mr-3'>
                        <img onClick={()=> window.open("/", "_self")} src="/images/icons/tiktok_icon.png" id="footer-social-logo" alt="Logo"className="img-fluid" style={{width:'25px',cursor:'pointer'}} />
                    </div>
                    <div className='mr-3'>
                        <img onClick={()=> window.open("/", "_self")} src="/images/icons/youtube_icon.png" id="footer-social-logo" alt="Logo"className="img-fluid" style={{width:'25px',cursor:'pointer'}} />
                    </div>
                </div>
            </div>
        </div>

        <div className='col-lg-3 col-xs-12 p-0 mt-5 d-flex flex-row justify-content-center align-items-start'>
            <div>
                <p className="font-size-24 dosis-semibold mb-3" style={{color:'#252525'}}>Connect with us</p>
                <p onClick={()=> window.open("/", "_self")}  className="font-size-18 dosis-regular mb-3" style={{color:'#252525',cursor:'pointer'}}>Contact Us</p>
                <p onClick={()=> window.open("/", "_self")}  className="font-size-18 dosis-regular mb-3" style={{color:'#252525',cursor:'pointer'}}>Our Location</p>

            </div>
        </div>


        <div className='col-lg-3 col-xs-12 p-0 mt-5 d-flex flex-row justify-content-center align-items-start'>
            <div>
                <p className="font-size-24 dosis-semibold mb-3" style={{color:'#252525'}}>Download the app</p>
                <div className='d-flex flex-column'>
                    <img onClick={()=> window.open("/", "_self")} src="/images/App_Store.png" id="" alt="Logo"className="img-fluid" style={{width:'150px',cursor:'pointer'}} />
                    <img onClick={()=> window.open("/", "_self")} src="/images/Google_Play.png" id="" alt="Logo"className="img-fluid pt-3" style={{width:'150px',cursor:'pointer'}} />
                </div>
            </div>
        </div>
    </div>  
  );
}

export default Footer;