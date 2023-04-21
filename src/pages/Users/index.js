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

                <PageHeading title="Users" />

                {/* <!-- Content Row --> */}
                <div className="row">
                    <div style={{width:'100%'}}>
                        <table className="table table-hover table-responsive">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Birthdate</th>
                                <th scope="col">User Type</th>
                                <th scope="col">MewCoins Topupped</th>
                                <th scope="col">MewCoins Withdrawn</th>
                                <th scope="col">Registered At</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Fernandha Dzaky Saputra</td>
                                <td>fernandhadzaky</td>
                                <td>Male</td>
                                <td>fernandhadzaky@hotmail.com</td>
                                <td>23 November 1997</td>
                                <td>Admin</td>
                                <td>200</td>
                                <td>-</td>
                                <td>20 September 2022</td>
                            </tr>
                            <tr>
                                <th >2</th>
                                <td>Alifio Rasyid</td>
                                <td>alifiorasyid</td>
                                <td>Male</td>
                                <td>alifiorasyid@hotmail.com</td>
                                <td>01 April 2023</td>
                                <td>Host</td>
                                <td>500</td>
                                <td>200</td>
                                <td>20 September 2022</td>
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