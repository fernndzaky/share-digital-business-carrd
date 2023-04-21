import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';

class Sidebar extends Component {
  // componentDidMount() {
  //   document.getElementById('body').className = 'page-top';
  // }
  // state = {
  //   sidebarToggled: false,
  // }

  // handleSideBarToggle() {
  //   if (this.sidebarToogled === true) {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top sidebar-toggled';
  //   } else {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top';
  //   }

  // }

  render() {
    const { clickMenuOpen, toggled } = this.props;
    return (
      <ul style={{backgroundColor:'#864A8F'}} className={toggled ? 'navbar-nav sidebar sidebar-dark accordion toggled' : 'navbar-nav  sidebar sidebar-dark accordion'} id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <img src="images/MewCom_Logo_White.png" class="img-fluid" />
          </div>
          <div className="sidebar-brand-text mx-3">MEWCOM</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/earnings">
            <i className="fas fa-fw fa-money-bill"></i>
            <span>Earnings</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-user"></i>
            <span>Users</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/transactions">
            <i className="fas fa-fw fa-book"></i>
            <span>Transactions</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/identity-verification">
            <i className="fas fa-fw fa-book"></i>
            <span>Identity Verification</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/advertisements">
            <i className="fa fa-fw fa-newspaper"></i>
            <span>Advertisements</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        {/* 
        <div className="sidebar-heading">
          Interface
        </div>

        <!-- Nav Item - Pages Collapse Menu --> 
        <li className="nav-item">
          <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapseTwo"  aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div id="collapseTwo" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">Buttons</a>
              <Link className="collapse-item" to="/cards">Cards</Link>
            </div>
          </div>
        </li>
        /*}


        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button onClick={() => { clickMenuOpen() }} className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);