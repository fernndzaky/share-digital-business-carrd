import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
import {Helmet} from "react-helmet";

class Dashboard extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }

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
                <div className="row pl-2 pr-2 pb-5">


                  {/* START OF DISPLAY PICTURE */}
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-4'>
                    <h5>Display Picture</h5> 
                    <div className='pt-2'>
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                      </div>
                    </div>
                    <div className='pt-2'>
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Display Picture" className="img-thumbnail" />
                    </div>
                  </div>
                  {/* END OF DISPLAY PICTURE */}

                  {/* START OF THEME SELECTION */}
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-4'>
                    {/* THEME SELECTION */}
                    <h5>Theme Selection</h5> 
                    <div className='pt-2'>
                      <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="exampleRadios1">
                            BLACK AND WHITE
                          </label>
                      </div>
                      <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                          <label className="form-check-label" htmlFor="exampleRadios2">
                            DARK BLUE
                          </label>
                      </div>
                      <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                          <label className="form-check-label" htmlFor="exampleRadios2">
                            DARK GREEN
                          </label>
                      </div>

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
                      <input type="text" className="form-control" placeholder="e.g. John Doe" aria-label="full_name"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6  col-xs-12 pt-3'>
                    <div >
                      <label>Phone</label> <br></br>
                      <input type="text" className="form-control" placeholder="e.g. +628111377893" aria-label="phone_number"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>email</label> <br></br>
                      <input type="email" className="form-control" placeholder="e.g. john@doe.com" aria-label="email"  />
                    </div>
                  </div>  
                  <div className='col-12 pt-3'>
                    <div >
                      <label>Address</label> <br></br>
                      <textarea className="form-control" placeholder="e.g. Jl. John Doe" aria-label="address"></textarea>
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
                      <input type="text" className="form-control" placeholder="e.g. https://www.instagram.com/johndoe/" aria-label="instagram_link"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6  col-xs-12 pt-3'>
                    <div >
                      <label>LinkedIn Link</label> <br></br>
                      <input type="text" className="form-control" placeholder="e.g. https://www.linkedin.com/in/john-doe/" aria-label="linked_in_link"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>TikTok Link</label> <br></br>
                      <input type="text" className="form-control" placeholder="e.g. https://www.tiktok.com/@johndoe" aria-label="tiktok_link"  />
                    </div>
                  </div>  
                  <div className='col-lg-6 col-md-6 col-xs-12 pt-3'>
                    <div >
                      <label>Twitter Link</label> <br></br>
                      <input type="text" className="form-control" placeholder="e.g. https://twitter.com/johndoe" aria-label="twitter_link"  />
                    </div>
                  </div>  
                  {/* END OF SOCIAL MEDIA SECTION */}
                  
                  <div className='col-12 d-flex flex-row-reverse pt-3'>
                    <button type="submit" class="btn btn-primary">UPDATE PROFILE</button>
                  </div>

                  {/* START OF WEBSITES*/}
                  <div className='col-12  mt-5'>
                    <h5>Websites</h5> 
                  </div>
                  <div className='row m-0 pl-3 pr-3 pb-3 mt-3 w-100' style={{backgroundColor:'#1A3B7D',borderRadius:'10px'}}>
                  <div className='col-12 pt-3'>
                        <label style={{color:'white'}}>#1 Website Name</label> <br></br>
                        <input type="text" className="form-control" placeholder="e.g. Tokopedia" aria-label="tiktok_link"  />
                      </div>
                      <div className='col-12 pt-3'>
                        <label style={{color:'white'}}>#1 Website Link</label> <br></br>
                        <input type="text" className="form-control" placeholder="e.g. https://www.tokopedia.com/" aria-label="tiktok_link"  />
                      </div>

                      <div className='col-12 pt-3'>
                        <label style={{color:'white'}}>#2 Website Name</label> <br></br>
                        <input type="text" className="form-control" placeholder="e.g. Tokopedia" aria-label="tiktok_link"  />
                      </div>
                      <div className='col-12 pt-3'>
                        <label style={{color:'white'}}>#2 Website Link</label> <br></br>
                        <input type="text" className="form-control" placeholder="e.g. https://www.tokopedia.com/" aria-label="tiktok_link"  />
                      </div>
                  </div>
                  <div className='col-12 d-flex flex-row-reverse pt-3'>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addWebsiteModal">
                      ADD WEBSITE
                    </button>
                  </div>
                  {/* Modal Add Website */}
                  <div className="modal fade" id="addWebsiteModal" tabIndex={-1} role="dialog" aria-labelledby="addWebsiteModalLabel" aria-hidden="true">
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
                            <label style={{color:'grey'}}>Website Name</label> <br></br>
                            <input type="text" className="form-control" placeholder="e.g. Tokopedia" aria-label="tiktok_link"  />
                          </div>
                          <div className='col-12 pt-3'>
                            <label style={{color:'grey'}}>Website Link</label> <br></br>
                            <input type="text" className="form-control" placeholder="e.g. https://www.tokopedia.com/" aria-label="tiktok_link"  />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                          <button type="button" className="btn btn-primary">CONFIRM</button>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  {/* END OF WEBSITES*/}




                  

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
        </a></div>
    )
  }
}

export default Dashboard;