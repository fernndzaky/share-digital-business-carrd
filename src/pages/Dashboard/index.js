import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

class Dashboard extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }
  componentDidMount(){
      this.getUserDetail()
      this.getUserWebsites()
  }

  constructor(){
    super()
    this.state = {
        displayPicture : '',
        userRole : '',
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
        submitFailed : false,
        isLoading : false,
        image: null,
        websites : [],
        websiteName : '',
        websiteLink : '',
    }
  }

  handleChange = (event) => {
    this.setState({
      image: event.target.files[0]
    });
  };
  
  handleImageSubmit = (event) => {
    event.preventDefault();
    this.notify('Uploading Image..')
    const { image } = this.state;
    if (image) {
      this.uploadImage(image);
    } else {
      // Handle case when no image is selected
    }
  };

  
  onChange = async (e) =>{
      this.setState({
        [e.target.name] : e.target.value
      })
  }

  getUserDetail = async (e) => {
    this.setState({
      isLoading : true
    })


    this.notify('Getting user detail..')

    try {
      const headers = {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Authorization': 'Bearer '+ localStorage.getItem("jwt"),
      };
  
  
      const response = await axios.get('https://bizz-bo-production.up.railway.app/api/user/'+ this.props.match.params.id, { headers: headers });

  
      // Handle the response
      // Assuming the response contains data field with relevant information
      if(response.status == 200){
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
      
    

    this.setState({
      isLoading : false
    })
  }

  updateProfile = async (e) => {
    e.preventDefault()
    try{
    this.notify('Updating User..')

    const headers = {
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Authorization': 'Bearer '+ localStorage.getItem("jwt"),
    };

    const data = {
        "Theme"         : this.state.theme,
        "Name"          : this.state.name,
        "Occupation"    : this.state.occupation,
        "Phone"         : this.state.phone,
        "Email"         : this.state.email,
        "Address"       : this.state.address,
        "InstagramLink" : this.state.instagramLink,
        "LinkedinLink"  : this.state.linkedinLink,
        "TiktokLink"    : this.state.tiktokLink,
        "TwitterLink"   : this.state.twitterLink
    }


    const response = await axios.put('https://bizz-bo-production.up.railway.app/api/user/update/'+ this.props.match.params.id, data, { headers: headers });
    if(response.status == 200){
      this.setState({
        errorMessage :''
      })
      this.notify('Profile updated!')
    }
    
    }
    catch (error) {
      if (error.response) {
        this.setState({
          errorMessage : error.response.data.errorMessage
        })
      } else {
        console.error(error);
      }
    }
  }

  uploadImage = async (file) => {
    try {
      this.setState({
        isLoading : true
      })
      const formData = new FormData();
      formData.append("data", file);
  
      const response = await axios.post("https://bizz-bo-production.up.railway.app/api/user/update-image/"+ this.props.match.params.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'accept': '*/*',
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
  
      // Handle the response
      console.log(response.data); // Assuming the response contains the uploaded image information
      if(response.status == 200){
        this.setState({
          errorMessage :'',
          displayPicture : response.data.content.DisplayPicture,
        })
        this.notify('Profile updated!')
      }
      // Perform any additional actions after successful upload
    } catch (error) {
      if (error.response) {
        // Handle specific error cases if needed
        this.setState({
          errorMessage : error.response.data.errorMessage
        })
      } else {
        console.error(error);
      }
    }
    this.setState({
      isLoading : false
    })
  };

  getUserWebsites = async () => {
    this.setState({
      isLoading : true
    })
    try {
      const headers = {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Authorization': 'Bearer '+ localStorage.getItem("jwt"),
      };
  
  
      const response = await axios.get('https://bizz-bo-production.up.railway.app/api/user/websites/'+ this.props.match.params.id, { headers: headers });

  
      // Handle the response
      // Assuming the response contains data field with relevant information
      if(response.status == 200){
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

  deleteWebsite = async(wid) => {
    this.notify('Deleting website..')

    this.setState({
      isLoading : true
    })
    try {
      const headers = {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Authorization': 'Bearer '+ localStorage.getItem("jwt"),
      };
  
  
      const response = await axios.delete('https://bizz-bo-production.up.railway.app/api/website/delete/'+ wid, { headers: headers });

  
      // Handle the response
      // Assuming the response contains data field with relevant information
      if(response.status == 200){
        this.notify('Delete successfull!..')

        this.getUserWebsites()
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

  addWebsite = async (e) => {
    e.preventDefault()
    try{
    this.notify('Adding new website..')

    const headers = {
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Authorization': 'Bearer '+ localStorage.getItem("jwt"),
    };

    const data = {
        "UserID"              : this.props.match.params.id,
        "WebsiteName"         : this.state.websiteName,
        "WebsiteLink"          : this.state.websiteLink,
    }


    const response = await axios.post('https://bizz-bo-production.up.railway.app/api/website/create/'+this.props.match.params.id, data, { headers: headers });
    if(response.status == 200){
      this.setState({
        errorMessage :''
      })
      this.notify('Website created!')
    }
    
    }
    catch (error) {
      if (error.response) {
        this.setState({
          errorMessage : error.response.data.errorMessage
        })
      } else {
        console.error(error);
      }
    }
  }



  notify = (message) => toast(message);

  render() {
    return (
      <div>
        <Helmet>
          <title>
              Bizz Dashboard | Elevate Your Connections, Redefine Impressions.
          </title>
          <meta
              name="description"
              content="Bizz | Elevate Your Connections, Redefine Impressions"
          />
        </Helmet>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}

                <PageHeading title="Dashboard" />

                {/* <!-- Content Row --> */}
                <form onSubmit={this.handleImageSubmit}>

                <div className="row pl-2 pr-2 pb-5">
                  {/* START OF DISPLAY PICTURE */}
                  <div className='col-12 pt-4'>
                    <h5>Display Picture</h5> 
                    <div className='pt-2'>
                      <div className="custom-file">
                        {this.state.isLoading == true ?
                        <input type="file" disabled onChange={this.handleChange} name= "image" className="custom-file-label" accept="image/*"/>
                        :
                        <input type="file"  onChange={this.handleChange} name= "image" className="custom-file-label" accept="image/*"/>
                        }

                      </div>
                    </div>
                    <div className='pt-2'>
                      <img style={{width:'50%',height:'350px',objectFit:'contain'}} src={this.state.displayPicture} alt="Display Picture" className="img-thumbnail" />
                    </div>
                    <div className='pt-3'>
                    {this.state.isLoading == true ?
                      <button type="submit" disabled class="btn btn-primary">LOADING..</button>
                    :
                      <button type="submit" class="btn btn-primary">UPDATE DISPLAY PICTURE</button>
                    }
                      </div>
                  </div>
                  {/* END OF DISPLAY PICTURE */}
                </div>
                </form>

                <form action="" method="PUT" onSubmit={(e) => this.updateProfile(e)}>
                <div className="row pl-2 pr-2 pb-5">


                  {/* START OF THEME SELECTION */}
                  <div className='col-12 pt-5'>
                    {/* THEME SELECTION */}
                    <h5>Theme Selection</h5> 
                    <div className='pt-2'>
                      <select value={this.state.theme} onChange={this.onChange} name="theme" required className="form-select form-control">
                        <option selected disabled>Select theme</option>
                        <option value={"black-and-white"}>Black and White</option>
                        <option value={"blue"}>Dark Blue</option>
                        <option value={"green"}>Dark Green</option>
                      </select>
                    </div>
                    {/* THEME SELECTION */}
                  </div>
                  {/* END OF THEME SELECTION */}

                  {/* START OF PERSONAL INFO SECTION */}
                  <div className='col-12 pt-5'>
                    <h5>Personal Information</h5> 
                  </div>
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>Full Name</label> <br></br>
                      <input type="text" value={this.state.name} onChange={this.onChange} name="name" className="form-control" placeholder="e.g. John Doe" aria-label="full_name"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6  col-xs-12 pt-3'>
                    <div >
                      <label>Phone</label> <br></br>
                      <input type="text" value={this.state.phone} onChange={this.onChange} name="phone"  className="form-control" placeholder="e.g. +628111377893" aria-label="phone_number"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>Email</label> <br></br>
                      <input type="email" value={this.state.email} onChange={this.onChange} name="email"  className="form-control" placeholder="e.g. john@doe.com" aria-label="email"  />
                      <p style={{color:'orange'}}> If you change your email, your login credentials will also change. You will need to use your updated email for logging in.</p>
                    </div>
                  </div>  
                  <div className='col-12 pt-3'>
                    <div >
                      <label>Address</label> <br></br>
                      <textarea className="form-control" value={this.state.address} onChange={this.onChange} name="address"  placeholder="e.g. Jl. John Doe" aria-label="address"></textarea>
                    </div>
                  </div>  
                  {/* END OF PERSONAL INFO SECTION */}


                  {/* START OF SOCIAL MEDIA SECTION */}
                  <div className='col-12 pt-5'>
                    <h5>Social Media</h5> 
                  </div>
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>Instagram Link</label> <br></br>
                      <input type="text" value={this.state.instagramLink} onChange={this.onChange} name="instagramLink" className="form-control" placeholder="e.g. https://www.instagram.com/johndoe/"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6  col-xs-12 pt-3'>
                    <div >
                      <label>LinkedIn Link</label> <br></br>
                      <input type="text" value={this.state.linkedinLink} onChange={this.onChange} name="linkedinLink" className="form-control" placeholder="e.g. https://www.linkedin.com/in/john-doe/" aria-label="linked_in_link"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>TikTok Link</label> <br></br>
                      <input type="text" value={this.state.tiktokLink} onChange={this.onChange} name="tiktokLink" className="form-control" placeholder="e.g. https://www.tiktok.com/@johndoe" aria-label="tiktok_link"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>Twitter Link</label> <br></br>
                      <input type="text" value={this.state.twitterLink} onChange={this.onChange} name="twitterLink" className="form-control" placeholder="e.g. https://twitter.com/johndoe" aria-label="twitter_link"  />
                    </div>
                  </div>  
                  {/* END OF SOCIAL MEDIA SECTION */}
                  <div className='col-12 d-flex align-items-center justify-content-center pt-4'>
                    <h5 style={{color:'red'}}>{this.state.errorMessage}</h5>
                  </div>
                  <div className='col-12 d-flex flex-row-reverse pt-3'>
                    <button type="submit" class="btn btn-primary">UPDATE PROFILE</button>
                  </div>

                  {/* START OF WEBSITES*/}
                  <div className='col-12  mt-5'>
                    <h5>Websites</h5> 
                    {this.state.websites.length == 0 &&
                      <p style={{color:'orange'}}>You have no websites! added</p>
                    }
                  </div>
                  {
                    this.state.websites.map( (e , index) => {
                      return(
                        <React.Fragment>
                            {
                  <div className='row m-0 pl-3 pr-3 pb-3 mt-3 w-100' style={{backgroundColor:'#1A3B7D',borderRadius:'10px'}}>
                    <div className='col-12 pt-3'>
                        <label style={{color:'white'}}>#{index+1} Website Name</label> <br></br>
                        <input type="text" className="form-control" placeholder="e.g. Tokopedia" disabled value={e.WebsiteName} aria-label="tiktok_link"  />
                      </div>
                      <div className='col-12 pt-3'>
                        <label style={{color:'white'}}>#{index+1} Website Link</label> <br></br>
                        <input type="text" className="form-control" placeholder="e.g. https://www.tokopedia.com/" disabled value={e.WebsiteLink} aria-label="tiktok_link"  />
                      </div>
                      <div className='col-12 pt-3 d-flex align-items-center justify-content-end'>
                        
                        <button type="button" onClick={() => this.deleteWebsite(e.ID)}  className="btn btn-danger pt-2 ml-2">
                          DELETE
                        </button>
                      </div>
                  </div>
                          } 
                        </React.Fragment>
                      )
                    })              
                  } 
                  <div className='col-12 d-flex flex-row-reverse pt-4'>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addWebsiteModal">
                      ADD WEBSITE
                    </button>
                  </div>
                  

                 
                  {/* END OF WEBSITES*/}




                  

                </div>

                </form>

                {/* Modal Add Website */}
                <div className="modal fade" id="addWebsiteModal" tabIndex={-1} role="dialog" aria-labelledby="addWebsiteModalLabel" aria-hidden="true">
                    <form action="" method="POST" onSubmit={(e) => this.addWebsite(e)}>

                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="addWebsiteModalLabel">Add New Website</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">x</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className='col-12 pt-1'>
                              <h5 style={{color:'red'}}>{this.state.errorMessage}</h5>
                            </div>
                            <div className='col-12 pt-1'>
                              <label style={{color:'grey'}}>Website Name</label> <br></br>
                              <input type="text" value={this.state.websiteName} onChange={this.onChange} name="websiteName" required className="form-control" placeholder="e.g. Tokopedia" aria-label="tiktok_link"  />
                            </div>
                            <div className='col-12 pt-3'>
                              <label style={{color:'grey'}}>Website Link</label> <br></br>
                              <input type="text" value={this.state.websiteLink} onChange={this.onChange} name="websiteLink" required className="form-control" placeholder="e.g. https://www.tokopedia.com/" aria-label="tiktok_link"  />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                            <button type="submit" className="btn btn-primary">CONFIRM</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                {/*
                <div className="row">
                  <div className="col-xl-8 col-lg-6">
                    <ChartLine />
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <ChartDonut />
                  </div>

                </div>
                 */}

              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Bizz 2023</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        <ToastContainer
            
            autoClose={5000}
            />
      </div>
    )
  }
}

export default Dashboard;