import React from 'react';
import '../../assets/css/Clients/client.css';
import '../../assets/css/Clients/home.css';
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Center from 'react-center';
import axios from 'axios';

import BlueButton from '../../components/Clients/BlueButton';
import WhiteButton from '../../components/Clients/WhiteButton';
import Footer from '../../components/Clients/Footer';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { createVCard } from 'vcf';




class Profile extends React.Component {

  constructor(){
    super()
    this.state = {
        displayPicture : '',
        theme : '',
        name : '',
        occupation : '',
        phone : '',
        email : '',
        address : '',
        instagramLink : '',
        linkedinLink : '',
        tiktokLink : '',
        twitterLink : '',
        isLoading : false,
        websites : [],
        websiteName : '',
        websiteLink : '',
        theme_color : "",
        socialMediaCounter : 0
    }
  }

  componentDidMount(){
    this.getUserDetail()
    this.getUserWebsites()
    this.countSocialMedia()
  }

  countSocialMedia = async () => {
    if(this.state.instagramLink !== ""){
      this.setState({
        socialMediaCounter : this.state.socialMediaCounter+1
      })
      console.log(this.state.socialMediaCounter)
    }
    if(this.state.linkedinLink !== ""){
      this.setState({
        socialMediaCounter : this.state.socialMediaCounter+1
      })
      console.log(this.state.socialMediaCounter)

    }
    if(this.state.twitterLink !== ""){
      this.setState({
        socialMediaCounter : this.state.socialMediaCounter+1
      })
      console.log(this.state.socialMediaCounter)

    }
    if(this.state.tiktokLink !== ""){
      this.setState({
        socialMediaCounter : this.state.socialMediaCounter+1
      })

            console.log(this.state.socialMediaCounter)

    }
  }


  getUserDetail = async (e) => {
    this.setState({
      isLoading : true
    })

    try {
      const headers = {
        'Content-Type': 'application/json',
        'accept': '*/*',
      };
  
  
      const response = await axios.get('https://bizz-bo-production.up.railway.app/api/user/'+ this.props.match.params.id, { headers: headers });

  
      // Handle the response
      // Assuming the response contains data field with relevant information
      if(response.status === 200){
        this.setState({
          displayPicture : response.data.content.DisplayPicture,
          theme : response.data.content.Theme,
          name : response.data.content.Name,
          occupation : response.data.content.Occupation,
          phone : response.data.content.Phone,
          email : response.data.content.Email,
          address : response.data.content.Address,
          instagramLink : response.data.content.InstagramLink,
          linkedinLink : response.data.content.LinkedinLink,
          tiktokLink : response.data.content.TiktokLink,
          twitterLink : response.data.content.TwitterLink,
        })

        this.countSocialMedia()

        if(this.state.theme === "black-and-white"){
          this.setState({
            theme_color : "#060D0D"
          })
        }
        else if(this.state.theme === "blue"){
          this.setState({
            theme_color : "#0F547E"
          })
        }
        else if(this.state.theme === "green"){
          this.setState({
            theme_color : "#1D3108"
          })
        }
      }
      // Perform any additional actions after successful login
    } catch (error) {
      if (error.response) {
        this.setState({
          errorMessage : error.response.data.errorMessage
        })
        window.location.href = '/404'

      } else {
        console.error(error);
      }
    }
      
    

    this.setState({
      isLoading : false
    })
  }

  getUserWebsites = async () => {
    this.setState({
      isLoading : true
    })
    try {
      const headers = {
        'Content-Type': 'application/json',
        'accept': '*/*',
      };
  
  
      const response = await axios.get('https://bizz-bo-production.up.railway.app/api/user/websites/'+ this.props.match.params.id, { headers: headers });

  
      // Handle the response
      // Assuming the response contains data field with relevant information
      if(response.status === 200){
        this.setState({
          websites : response.data.content,
        })
      }
      // Perform any additional actions after successful login
    } catch (error) {
      if (error.response) {
        this.setState({
          errorMessage : error.response.data.errorMessage
        })
      } else {
        console.error(error);
      }
    }
  }


  
  handleContactClick = async (e) => {
    // Get the contact information from the website
    var contact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      occupation: this.state.occupation,
      address: this.state.address
    };
  
    // Create the vCard content
    var vcardContent =
      'BEGIN:VCARD\n' +
      'VERSION:3.0\n' +
      'N:' + contact.name + '\n' +
      'TEL;TYPE=work,voice:' + contact.phone + '\n' +
      'EMAIL:' + contact.email + '\n' +
      'ROLE:' + contact.occupation + '\n' +
      'TITLE:' + contact.occupation + '\n' +
      'ADR:' + contact.address + '\n' +
      'END:VCARD';
  
    // Create a Blob from the vCard content
    var blob = new Blob([vcardContent], { type: 'text/vcard' });
    var url = URL.createObjectURL(blob);
  
    const newLink = document.createElement('a');
    newLink.download = contact.name + '.vcf';
    newLink.textContent = contact.name;
    newLink.href = url;
  
    newLink.click();
  }

  
   

  render(){
  
    return(
      <div className="body-container">
        <Helmet>
            <title>
                Bizz Profile - {this.state.name}
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
                <img src={this.state.displayPicture} className='img-fluid' id="profile-picture" alt="Profile Picture" style={{height:'320px',width:'100%',objectFit:'cover'}} />
                {this.state.theme === "black-and-white" ?
                <img src="/images/Wave_Border.png" className='img-fluid' alt="Wave" style={{height:'auto',width:'100%',objectFit:'cover',marginTop:'-60px'}} />
                :  
                this.state.theme === "blue" ?
                <img src="/images/Wave_Border_Blue.png" className='img-fluid' alt="Wave" style={{height:'auto',width:'100%',objectFit:'cover',marginTop:'-60px'}} />
                :
                <img src="/images/Wave_Border_Green.png" className='img-fluid' alt="Wave" style={{height:'auto',width:'100%',objectFit:'cover',marginTop:'-60px'}} />
              }
              </div>
              <div className='col-12 px-4 pb-5 pt-2'>
                <p className="font-size-24 raleway-bold mb-1" style={{color:'#252525'}}>{this.state.name}</p>
                <p className="font-size-18 lato-regular pb-2" style={{color:'#252525',fontStyle:'italic'}}>{this.state.occupation}</p>
                
                <div className='mt-4'>
                  <div className='d-flex align-items-center justify-content-start'>
                    <div style={{width:'10%'}}>
                      <div className='circle  d-flex align-items-center justify-content-center' style={{background:this.state.theme_color}}>
                        <i className="fas fa-phone font-size-18" style={{color:'white'}}></i>
                      </div>
                    </div>
                    <p className="font-size-18 lato-regular mb-0 ml-3" style={{color:'#252525'}}>{this.state.phone}</p>
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='d-flex align-items-center justify-content-start'>
                    <div style={{width:'10%'}}>
                      <div className='circle  d-flex align-items-center justify-content-center' style={{background:this.state.theme_color}}>
                        <i className="fas fa-envelope font-size-18" style={{color:'white'}}></i>
                      </div>
                    </div>
                    <p className="font-size-18 lato-regular mb-0 ml-3" style={{color:'#252525'}}>{this.state.email}</p>
                  </div>
                </div>

                {this.state.address !== "" &&
                      
                    
                <div className='mt-4'>
                  <div className='d-flex align-items-center justify-content-start'>
                    <div style={{width:'10%'}}>
                      <div className='circle  d-flex align-items-center justify-content-center' style={{background:this.state.theme_color}}>
                        <FontAwesomeIcon icon={faLocationDot} className="font-size-18" style={{color:'white'}} />
                      </div>

                    </div>
                    <p className="font-size-18 lato-regular mb-0 ml-3" style={{color:'#252525'}}>{this.state.address}</p>
                  </div>
                </div>
                }


                <button onClick={(e) => this.handleContactClick(e)}  className='client-squared-button raleway-semibold font-size-18 mt-4 py-3' style={{backgroundColor: this.state.theme_color}}>
                  <span>
                    <i className="fa fa-solid fa-user-plus font-size-18 mr-3" style={{color:'white'}}></i>
                  </span>
                  Save Contact
                </button>

              </div>
              
            </div>
            {/* END OF PROFILE*/}

            {/* START OF SOCIAL MEDIA*/}
            {(this.state.instagramLink !== "" || this.state.twitterLink !== "" || this.state.linkedinLink !== "" || this.state.tiktokLink !== "") &&
              <div className='row m-0 px-4 py-4'>
                <div className='col-12 p-0 mb-3'>
                  <p className="font-size-24 raleway-semibold mb-1" style={{color:'#252525',textDecoration:'underline'}}>SOCIAL MEDIA</p>
                </div>
                
                <div className={this.state.socialMediaCounter < 3 ? 'col-12 p-0 d-flex justify-content-start align-items-start':  'col-12 p-0 d-flex justify-content-between align-items-start'} >
                    {this.state.instagramLink !== "=" &&
                      <div onClick={() => window.open(this.state.instagramLink, '_blank')} className='d-flex align-items-center justify-content-center' style={{backgroundColor:this.state.theme_color,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                        <i className="fab fa-instagram font-size-36" style={{color:'white'}}></i>
                      </div>
                    }
                    {this.state.twitterLink !== "" &&
                      <div onClick={() => window.open(this.state.twitterLink, '_blank')} className={this.state.socialMediaCounter < 3 ? 'ml-3 d-flex align-items-center justify-content-center' : 'd-flex align-items-center justify-content-center'} style={{backgroundColor:this.state.theme_color,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                        <i className="fab fa-twitter font-size-36" style={{color:'white'}}></i>
                      </div>
                    }
                    {this.state.linkedinLink !== "" &&
                      <div onClick={() => window.open(this.state.linkedinLink, '_blank')} className={this.state.socialMediaCounter < 3 ? 'ml-3 d-flex align-items-center justify-content-center' : 'd-flex align-items-center justify-content-center'} style={{backgroundColor:this.state.theme_color,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                        <i className="fab fa-linkedin-in font-size-36" style={{color:'white'}}></i>
                      </div>
                    }
                    {this.state.tiktokLink !== "" &&
                      <div onClick={() => window.open(this.state.tiktokLink, '_blank')} className={this.state.socialMediaCounter < 3 ? 'ml-3 d-flex align-items-center justify-content-center' : 'd-flex align-items-center justify-content-center'} style={{backgroundColor:this.state.theme_color,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",height:'65px', width:'65px',borderRadius:'10px'}}>
                        <img src="/images/icons/tiktok_icon_small.png" className='img-fluid' alt="Tiktok" style={{width:'25px'}} />

                      </div>
                    }
                </div>
              </div>
            
            }
            {/* END OF SOCIAL MEDIA*/}

            {/* START OF WEBSITES*/}
            {this.state.websites.length > 0 &&
            
            <div className='row m-0 px-4 py-4'>
              <div className='col-12 p-0 mb-3'>
                <p className="font-size-24 raleway-semibold mb-1" style={{color:'#252525',textDecoration:'underline'}}>WEBSITES</p>
              </div>
              <div className='col-12 p-0'>
              {
                    this.state.websites.map( (e , index) => {
                      return(
                        <React.Fragment>
                            {
                  <div  onClick={() => window.open(e.WebsiteLink, '_blank')} style={{backgroundColor:this.state.theme_color,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:'10px',textAlign:'center'}} className="py-3 mb-3">
                    <p className="font-size-18 raleway-semibold mb-1" style={{color:'#FFFFFF'}}>{e.WebsiteName}</p>
                  </div>
                    } 
                    </React.Fragment>
                  )
                })              
              } 
                  
              </div>      
            </div>
            }
            {/* END OF WEBSITES*/}

            {/* FOOTER */}
            <div className='row m-0 px-4 py-4 mt-5' style={{borderTop:'1px solid #252525'}}>
              <div className='col-12 p-0 mb-3 d-flex align-items-center justify-content-center'>
                <img src="/images/BIZZ_NAME_LOGO.png" className='img-fluid' alt="Bizz Logo" style={{width:'25%'}} />
              </div>   
              <div className='col-12 p-0 mb-3 d-flex align-items-center justify-content-center'>
                <a href="http://smartbizz.id/" target="_blank" className="font-size-18 raleway-semibold mb-1" style={{color:'#252525',textDecoration:'underline'}}>POWERED BY &copy; BIZZ 2023</a>
              </div>   
            </div>
            


          </div>
        </Center>
        
    </div>
    )}
}

export default Profile;