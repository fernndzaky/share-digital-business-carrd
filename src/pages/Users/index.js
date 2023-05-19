import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';

class Users extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }

  render() {
    return (
      <div>
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
                <div className='d-flex justify-content-between w-100'>
                  <PageHeading title="Users" />
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addNewUserModal">
                    Create New User
                  </button>
                  {/* Modal Add New User */}
                  <div className="modal fade" id="addNewUserModal" tabIndex={-1} role="dialog" aria-labelledby="addNewUserModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="addNewUserModalLabel">Add New User</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">x</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className='col-12 pt-1'>
                            <label style={{color:'grey'}}>Email</label> <br></br>
                            <input type="email" className="form-control" placeholder="e.g. johndoe@gmail.com"   />
                          </div>
                          <div className='col-12 pt-3'>
                            <label style={{color:'grey'}}>Password</label> <br></br>
                            <input type="password" className="form-control" placeholder=""   />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                          <button type="button" className="btn btn-primary">CONFIRM</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    <div style={{width:'100%'}}>
                        <table className="table table-hover table-responsive">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Registered At</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>Fernandha Dzaky Saputra</td>
                                  <td>fernandhadzaky@hotmail.com</td>
                                  <td>+628111377893</td>
                                  <td>20 September 2022</td>
                                  <td>
                                    <div className='d-flex'>
                                      <button type="button" class="btn btn-primary mr-2">Edit</button>
                                      <button type="button" class="btn btn-danger ml-2">Delete</button>
                                    </div>

                                  </td>
                              </tr>
                              <tr>
                                  <th scope="row">2</th>
                                  <td>Fernandha Dzaky Saputra</td>
                                  <td>fernandhadzaky@hotmail.com</td>
                                  <td>+628111377893</td>
                                  <td>20 September 2022</td>
                                  <td>
                                    <div className='d-flex'>
                                      <button type="button" class="btn btn-primary mr-2">Edit</button>
                                      <button type="button" class="btn btn-danger ml-2">Delete</button>
                                    </div>

                                  </td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
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
                  <span>Copyright &copy; MewCom 2023</span>
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

export default Users;