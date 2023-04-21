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
import PurpleButton from '../../components/Clients/PurpleButton';
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
                MewCom | Connect users with communication needs to a virtual host.
            </title>
            <meta
                name="description"
                content="MewCom | Connect users with communication needs to a virtual host"
            />
        </Helmet>
        <NavigationBar></NavigationBar>

        {/* START OF TOP DESKTOP SECTION */}
        <div className='desktop-widget'>
            <div className="row m-0 no-gutters top-home-background-image px-lg-5">
                <div className="col-md-6 d-flex flex-row justify-content-center align-items-center">
                    <img src="/images/Application_Illustration.png" className='app-illustration' alt="App Illustration" style={{height:'500px'}} />
                </div>
                <div className="col-md-6 pr-5 d-flex flex-column justify-content-center align-items-start">
                    <p className="font-size-36 dosis-bold mb-3" style={{color:'#252525'}}>MEWCOM</p>
                    <p className="font-size-24 dosis-semibold mt-2 mb-5" style={{color:'#252525'}}>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry. Lorem Ipsum has been <br></br> the industry's standard dummy text ever </p>
                    <PurpleButton buttonText={"LEARN MORE"}></PurpleButton>

                </div>
            </div>
        </div>

        {/* END OF TOP DESKTOP SECTION*/}

        {/* START OF TOP MOBILE SECTION */}
        <div className='mobile-widget'>
            <div className="row m-0 no-gutters top-home-background-image-mobile px-4 py-5">
                <div className="col-12 d-flex flex-column justify-content-center align-items-end">
                    <p className="font-size-36 dosis-bold mb-3" style={{color:'#252525'}}>MEWCOM</p>
                    <p className="font-size-24 dosis-semibold mt-2 mb-4" style={{color:'#252525',textAlign:'right',width:'80%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                    <PurpleButton buttonText={"LEARN MORE"}></PurpleButton>

                </div>
            </div>
        </div>

        {/* END OF TOP MOBILE SECTION*/}

        {/* START OF VIDEO SECTION */}
        <div className="row m-0 pt-5 px-lg-5" style={{backgroundColor:'#6D5095',paddingBottom:'20vh'}}>
            <div className="col-12 px-lg-5 px-4 py-5 d-flex flex-column justify-content-center align-items-center">
                <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/P1vtAZoMMuU"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '10px', border: 'none' }}
                    >
                </iframe>
            </div>
        </div>
        {/* END OF VIDEO SECTION */}

        {/* START OF OUR FEATURES SECTION */}
        <div className="py-5 pl-lg-5 " id="our-feature-section" style={{backgroundColor:'#DDD6E6',borderRadius:'50px 50px 0px 0px',marginTop:'-50px'}}>
            <div className="col-12 pt-5 px-lg-5 pl-4">
                <p className="font-size-36 dosis-bold mb-3" style={{color:'#252525'}}>OUR FEATURES</p>
                <div className='pr-lg-5'>
                    <p className="font-size-24 dosis-semibold mt-2 mb-5" style={{color:'#252525'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
                </div>
                
            </div>
            <div className='desktop-widget'>
                <div className='col-12 pb-5 pl-lg-5 pr-0'>
                    <Swiper
                        effect='fade'
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{cursor:'pointer'}}
                    >
                        <SwiperSlide>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{marginLeft:'-2vw'}}>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{marginLeft:'-2vw'}}>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{marginLeft:'-2vw'}}>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='mobile-widget'>
                <div className='col-12 pb-5 pl-lg-5 pl-4 pr-0'>
                    <Swiper
                        effect='fade'
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{cursor:'pointer'}}
                    >
                        <SwiperSlide>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{marginLeft:'-30px'}}>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{marginLeft:'-30px'}}>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{marginLeft:'-30px'}}>
                            <div style={{backgroundColor:'#FFFFFF', borderRadius:'30px'}}>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>            

            {/* START OF CONTACT US SECTION */}
            <div className="row m-0 pt-5 px-lg-5 px-4">
                <div className='col-lg-7 col-xs-12 px-0'>
                    <div className='p-lg-5 p-4' style={{backgroundColor:'#3E549C', borderRadius:'25px'}}>
                        <p className="font-size-36 dosis-bold mb-3" style={{color:'#FFFFFF'}}>CONTACT US</p>
                        <div className='pr-lg-5'>
                            <p className="font-size-24 dosis-semibold mt-2 mb-3" style={{color:'#FFFFFF'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        </div>
                        
                        <div className="form-group pt-2">
                            <p className="font-size-18 dosis-semibold mb-3" style={{color:'#FFFFFF'}}>Full Name <span style={{color:'red'}}>*</span></p>
                            <input type="text" className="pb-1 text-input dosis-regular" id="full_name" placeholder="Insert your full name" />
                        </div>
                        <div className="form-group pt-2">
                            <p className="font-size-18 dosis-semibold mb-3" style={{color:'#FFFFFF'}}>Email <span style={{color:'red'}}>*</span></p>
                            <input type="email" className="pb-1 text-input dosis-regular" id="full_name" placeholder="Insert your email address" />
                        </div>

                        <div className="form-group pt-2">
                            <p className="font-size-18 dosis-semibold mb-3" style={{color:'#FFFFFF'}}>Message <span style={{color:'red'}}>*</span></p>
                            <textarea  className="pb-1 text-input dosis-regular" id="message" placeholder="Insert your message" ></textarea>
                        </div>
                        <div style={{textAlign:"right"}} className="mt-4">
                            <WhiteButton buttonText={"SEND MESSAGE"}></WhiteButton>

                        </div>



                    </div>
                </div>
                <div className='col-lg-5 col-xs-12 px-0 d-flex flex-row justify-content-center align-items-center'>
                    <img src="/images/Contact_Us_Illustration.png" className='contact-us-illustration desktop-widget' alt="App Illustration" style={{width:'50%'}} />
                </div>

            </div>
            {/* START OF CONTACT US SECTION */}
        </div>
        {/* END OF OUR FEATURES SECTION */}

        <Footer></Footer>


    </div>
    )}
}

export default HomePage;