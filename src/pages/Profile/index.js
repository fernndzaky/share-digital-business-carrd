import React from 'react';
import '../../assets/css/Clients/client.css';
import '../../assets/css/Clients/home.css';
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Center from 'react-center';

import BlueButton from '../../components/Clients/BlueButton';
import WhiteButton from '../../components/Clients/WhiteButton';
import Footer from '../../components/Clients/Footer';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';





class Profile extends React.Component {

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
                content="Bizz | Elevate Your Connections, Redefine Impressions"
            />
        </Helmet>

        <Center>
          <div style={{width:'500px'}} className="pb-5">
            {/* START OF PROFILE*/}
            <div className='row m-0'>
              <div className='col-12 p-0'>
                <img src="/images/Person.png" className='img-fluid' id="profile-picture" alt="Profile Picture" style={{height:'320px',width:'100%',objectFit:'cover'}} />
                <img src="/images/Wave_Border.png" className='img-fluid' alt="Wave" style={{height:'auto',width:'100%',objectFit:'cover',marginTop:'-60px'}} />
              </div>
              <div className='col-12 px-4 pb-5 pt-2'>
                <p className="font-size-24 raleway-bold mb-1" style={{color:'#252525'}}>John Doe</p>
                <p className="font-size-18 lato-regular pb-2" style={{color:'#252525',fontStyle:'italic'}}>Chief Marketing Officer</p>
                
                <div className='mt-4'>
                  <div className='d-flex align-items-center justify-content-start'>
                    <div className='circle  d-flex align-items-center justify-content-center'>
                      <i className="fas fa-phone font-size-18" style={{color:'white'}}></i>
                    </div>
                    <p className="font-size-18 lato-regular mb-0 ml-3" style={{color:'#252525'}}>+62 811 137 7895</p>
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='d-flex align-items-center justify-content-start'>
                    <div className='circle  d-flex align-items-center justify-content-center'>
                      <i className="fas fa-envelope font-size-18" style={{color:'white'}}></i>
                    </div>
                    <p className="font-size-18 lato-regular mb-0 ml-3" style={{color:'#252525'}}>johndoe@hotmail.com</p>
                  </div>
                </div>


                <div className='mt-4'>
                  <div className='d-flex align-items-center justify-content-start'>
                    <div style={{width:'120px'}}>
                      <div className='circle  d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faLocationDot} className="font-size-18" style={{color:'white'}} />
                      </div>

                    </div>
                    <p className="font-size-18 lato-regular mb-0" style={{color:'#252525'}}>Lantai 52 Tokopedia Tower Ciputra World 2, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta.</p>
                  </div>
                </div>


                <button className='client-black-button raleway-semibold font-size-18 mt-4 py-3'>
                  <span>
                    <i className="fa fa-solid fa-user-plus font-size-18 mr-3" style={{color:'white'}}></i>
                  </span>
                  Save Contact
                </button>

              </div>
              
            </div>
            {/* END OF PROFILE*/}

            {/* START OF SOCIAL MEDIA*/}
            <div className='row m-0 px-4 py-4'>
              <div className='col-12 p-0 mb-3'>
                <p className="font-size-24 raleway-semibold mb-1" style={{color:'#252525',textDecoration:'underline'}}>SOCIAL MEDIA</p>
              </div>
              <div className='col-12 p-0 d-flex justify-content-between align-items-start'>
                  <div className='d-flex align-items-center justify-content-center' style={{backgroundColor:'#060D0D',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                    <i className="fab fa-instagram font-size-36" style={{color:'white'}}></i>
                  </div>
                  <div className='d-flex align-items-center justify-content-center' style={{backgroundColor:'#060D0D',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                    <i className="fab fa-twitter font-size-36" style={{color:'white'}}></i>
                  </div>
                  <div className='d-flex align-items-center justify-content-center' style={{backgroundColor:'#060D0D',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                    <i className="fab fa-linkedin-in font-size-36" style={{color:'white'}}></i>
                  </div>
                  <div className='d-flex align-items-center justify-content-center' style={{backgroundColor:'#060D0D',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                    <i className="fab fa-tiktok font-size-36" style={{color:'white'}}></i>
                  </div>
              </div>
             
              
            </div>
            {/* END OF SOCIAL MEDIA*/}

            {/* START OF WEBSITES*/}
            <div className='row m-0 px-4 py-4'>
              <div className='col-12 p-0 mb-3'>
                <p className="font-size-24 raleway-semibold mb-1" style={{color:'#252525',textDecoration:'underline'}}>OTHERS</p>
              </div>
              <div className='col-12 p-0'>
                  <div style={{backgroundColor:'#060D0D',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:'10px',textAlign:'center'}} className="py-3">
                    <p className="font-size-18 raleway-semibold mb-1" style={{color:'#FFFFFF'}}>Shoppee</p>
                  </div>
                  <div style={{backgroundColor:'#060D0D',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:'10px',textAlign:'center'}} className="py-3 mt-3">
                    <p className="font-size-18 raleway-semibold mb-1" style={{color:'#FFFFFF'}}>Tokopedia</p>
                  </div>
                  
              </div>
             
              
            </div>
            {/* END OF WEBSITES*/}



          </div>
        </Center>
        
    </div>
    )}
}

export default Profile;