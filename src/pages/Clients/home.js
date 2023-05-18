import React from 'react';
import '../../assets/css/Clients/client.css';
import '../../assets/css/Clients/home.css';
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import NavigationBar from '../../components/Clients/Navbar';
import BlueButton from '../../components/Clients/BlueButton';
import WhiteButton from '../../components/Clients/WhiteButton';
import Footer from '../../components/Clients/Footer';





class HomePage extends React.Component {

  constructor(){
    super()
    this.state = {
    }

  }



  render(){
    return(
      <div className="body-container">
        <Helmet>
            <title>
                Bizz | Elevate Your Connections, Redefine Impressions.
            </title>
            <meta
                name="description"
                content="MewCom | Connect users with communication needs to a virtual host"
            />
        </Helmet>
        <NavigationBar></NavigationBar>

        {/* START OF TOP DESKTOP SECTION */}
        <div className='desktop-widget'>
            <div className="row m-0 no-gutters px-lg-5" style={{height:'85vh'}}>
                <div className="col-md-6 d-flex flex-row justify-content-center align-items-center">
                    <img src="/images/Card_Illustration.png" className='app-illustration' alt="Card Illustration" style={{height:'500px'}} />
                </div>
                <div className="col-md-6 pr-5 pl-5 d-flex flex-column justify-content-center align-items-start">
                    <p className="font-size-36 raleway-bold mb-3" style={{color:'#252525'}}>BIZZ.</p>
                    <p className="font-size-24 lato-semibold mt-2 mb-5" style={{color:'#252525'}}>Experience seamless connections and leave <br></br> unforgettable impressions with Bizz, the smart <br></br> business card, redefines networking with style!</p>
                    <BlueButton buttonText={"LEARN MORE"}></BlueButton>
                </div>
            </div>
        </div>

        {/* END OF TOP DESKTOP SECTION*/}


        {/* START OF MIDDLE SECTION */}
        <div className="row m-0 py-5 px-lg-5" style={{backgroundColor:'#29353C'}} id="our-product">
            <div className="col-md-6 col-xs-12 pl-5 d-flex flex-column justify-content-center align-items-start" style={{height:'70vh'}}>
                <p className="font-size-36 raleway-bold mb-3" style={{color:'#FFFFFF'}}> <span style={{color:'#F8AA8B'}}>SMART</span> BUSINESS CARD</p>
                <p className="font-size-24 lato-semibold mt-2 mb-5" style={{color:'#FFFFFF'}}>Elevate your networking game and make lasting <br></br> impressions with Bizz, the smart business card that <br></br> connects you with style and sophistication</p>
                <BlueButton buttonText={"SHOP NOW"}></BlueButton>
            </div>
            <div className="col-md-6 col-xs-12 d-flex flex-row justify-content-center align-items-center"  style={{height:'70vh'}}>
                <img src="/images/White_Card_Illustration.png" className='app-illustration' alt="White_Card_Illustration" style={{height:'500px'}} />
            </div>

           
            <div className="col-md-6 col-xs-12 d-flex flex-row justify-content-center align-items-center"  style={{height:'70vh'}}>
                <img src="/images/CMS_Application.png" className='app-illustration' alt="CMS_Application" style={{height:'500px'}} />
            </div>
            <div className="col-md-6 col-xs-12 pr-5 d-flex flex-column justify-content-center align-items-start" style={{height:'70vh'}}>
                <p className="font-size-36 raleway-bold mb-3" style={{color:'#FFFFFF'}}> Customize. Connect. Impress.</p>
                <p className="font-size-24 lato-semibold mt-2 mb-5" style={{color:'#FFFFFF'}}>Unleash your personal touch and forge memorable <br></br> connections with Bizz, where you can effortlessly <br></br> customize your data through our CMS, revolutionizing networking with style and sophistication</p>
                <BlueButton buttonText={"SHOP NOW"}></BlueButton>
            </div>

            <div className="col-md-6 col-xs-12 pl-5 d-flex flex-column justify-content-center align-items-start" style={{height:'70vh'}}>
                <p className="font-size-36 raleway-bold mb-3" style={{color:'#FFFFFF'}}><span style={{color:'#FC5543'}}>BOLD</span> VISUAL STATEMENT</p>
                <p className="font-size-24 lato-semibold mt-2 mb-5" style={{color:'#FFFFFF'}}>Choose from a vibrant palette of three distinct <br></br> colors, allowing you to personalize your Bizz <br></br> experience and make a bold visual statement.</p>
                <BlueButton buttonText={"SHOP NOW"}></BlueButton>
            </div>
            <div className="col-md-6 col-xs-12 d-flex flex-row justify-content-center align-items-center"  style={{height:'70vh'}}>
                <img src="/images/User_UI.png" className='app-illustration' alt="User_UI" style={{height:'500px'}} />
            </div>

            <div className='col-12 px-5 py-5' id="contact-us">
                <div className='p-lg-5 p-4' style={{backgroundColor:'#1A3B7D', borderRadius:'10px'}}>
                    <p className="font-size-36 raleway-bold mb-3" style={{color:'#FFFFFF'}}>CONTACT US</p>
                    <div className='pr-lg-5'>
                        <p className="font-size-18 lato-regular mt-2 mb-3" style={{color:'#FFFFFF'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    </div>
                    
                    <div className="form-group pt-2">
                        <p className="font-size-18 raleway-semibold mb-3" style={{color:'#FFFFFF'}}>Full Name <span style={{color:'red'}}>*</span></p>
                        <input type="text" className="pb-1 text-input lato-regular" style={{color:'#FFFFFF'}} id="full_name" placeholder="Insert your full name" />
                    </div>
                    <div className="form-group pt-2">
                        <p className="font-size-18 raleway-semibold mb-3" style={{color:'#FFFFFF'}}>Email <span style={{color:'red'}}>*</span></p>
                        <input type="email" className="pb-1 text-input lato-regular" style={{color:'#FFFFFF'}} id="full_name" placeholder="Insert your email address" />
                    </div>

                    <div className="form-group pt-2">
                        <p className="font-size-18 raleway-semibold mb-3" style={{color:'#FFFFFF'}}>Message <span style={{color:'red'}}>*</span></p>
                        <textarea  className="pb-1 text-input lato-regular" style={{color:'#FFFFFF'}} id="message" placeholder="Insert your message" ></textarea>
                    </div>
                    <div style={{textAlign:"right"}} className="mt-4">
                        <WhiteButton buttonText={"SEND MESSAGE"}></WhiteButton>

                    </div>



                </div>
            </div>

        </div>
        {/* END OF MIDDLE SECTION */}

        <Footer></Footer>


    </div>
    )}
}

export default HomePage;