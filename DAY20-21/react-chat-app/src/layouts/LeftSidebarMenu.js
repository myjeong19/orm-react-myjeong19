import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import { connect } from 'react-redux';

import { setActiveTab } from '../redux/actions';

import classnames from 'classnames';

import logo from '../assets/images/logo.svg';
import avatar1 from '../assets/images/users/avatar-1.jpg';

// falgs
import usFlag from '../assets/images/flags/us.jpg';
import spain from '../assets/images/flags/spain.jpg';
import germany from '../assets/images/flags/germany.jpg';
import italy from '../assets/images/flags/italy.jpg';
import russia from '../assets/images/flags/russia.jpg';
import { createSelector } from 'reselect';

const LeftSidebarMenu = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
  const toggleMobile = () => setDropdownOpenMobile(!dropdownOpenMobile);

  const toggleTab = tab => {
    props.setActiveTab(tab);
  };

  const activeTab = props.activeTab;

  return (
    <React.Fragment>
      <div className='side-menu flex-lg-column me-lg-1'>
        <div className='navbar-brand-box'>
          <Link to='/' className='logo logo-dark'>
            <span className='logo-sm'>
              <img src={logo} alt='logo' height='30' />
            </span>
          </Link>

          <Link to='/' className='logo logo-light'>
            <span className='logo-sm'>
              <img src={logo} alt='logo' height='30' />
            </span>
          </Link>
        </div>

        {/* end navbar-brand-box  */}

        <div className='flex-lg-column my-auto'>
          <Nav
            className='side-menu-nav nav-pills justify-content-center'
            role='tablist'
          >
            <NavItem id='profile'>
              <NavLink
                id='pills-user-tab'
                className={
                  classnames({ active: activeTab === 'profile' }) + ' mb-2'
                }
                onClick={() => {
                  toggleTab('profile');
                }}
              >
                <i className='ri-user-2-line'></i>
              </NavLink>
            </NavItem>

            <UncontrolledTooltip target='profile' placement='top'>
              Profile
            </UncontrolledTooltip>

            <NavItem id='Chats'>
              <NavLink
                id='pills-chat-tab'
                className={
                  classnames({ active: activeTab === 'chat' }) + ' mb-2'
                }
                onClick={() => {
                  toggleTab('chat');
                }}
              >
                <i className='ri-message-3-line'></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target='Chats' placement='top'>
              Chats
            </UncontrolledTooltip>

            <NavItem id='Groups'>
              <NavLink
                id='pills-groups-tab'
                className={
                  classnames({ active: activeTab === 'group' }) + ' mb-2'
                }
                onClick={() => {
                  toggleTab('group');
                }}
              >
                <i className='ri-group-line'></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target='Groups' placement='top'>
              Groups
            </UncontrolledTooltip>

            <NavItem id='Contacts'>
              <NavLink
                id='pills-contacts-tab'
                className={
                  classnames({ active: activeTab === 'contacts' }) + ' mb-2'
                }
                onClick={() => {
                  toggleTab('contacts');
                }}
              >
                <i className='ri-contacts-line'></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target='Contacts' placement='top'>
              Contacts
            </UncontrolledTooltip>

            <NavItem id='Settings'>
              <NavLink
                id='pills-setting-tab'
                className={classnames({ active: activeTab === 'settings' })}
                onClick={() => {
                  toggleTab('settings');
                }}
              >
                <i className='ri-settings-2-line'></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target='Settings' placement='top'>
              Settings
            </UncontrolledTooltip>
            <Dropdown
              nav
              isOpen={dropdownOpenMobile}
              toggle={toggleMobile}
              className='profile-user-dropdown d-inline-block d-lg-none dropup'
            >
              <DropdownToggle nav>
                <img
                  src={avatar1}
                  alt='chatvia'
                  className='profile-user rounded-circle'
                />
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-end'>
                <DropdownItem
                  onClick={() => {
                    toggleTab('profile');
                  }}
                >
                  Profile{' '}
                  <i className='ri-profile-line float-end text-muted'></i>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    toggleTab('settings');
                  }}
                >
                  Setting{' '}
                  <i className='ri-settings-3-line float-end text-muted'></i>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='/logout'>
                  Log out{' '}
                  <i className='ri-logout-circle-r-line float-end text-muted'></i>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
        {/* end side-menu nav */}

        <div className='flex-lg-column d-none d-lg-block'>
          <Nav className='side-menu-nav justify-content-center'>
            <Dropdown
              nav
              isOpen={dropdownOpen2}
              className='btn-group dropup profile-user-dropdown'
              toggle={toggle2}
            >
              <DropdownToggle nav>
                <i className='ri-global-line'></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <img src={usFlag} alt='user' className='me-1' height='12' />{' '}
                  <span className='align-middle'>English</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <li className='nav-item'>
              <NavLink id='light-dark' className='mb-2'>
                <i className='ri-sun-line theme-mode-icon'></i>
              </NavLink>
              <UncontrolledTooltip target='light-dark' placement='right'>
                Dark / Light Mode
              </UncontrolledTooltip>
            </li>
            <Dropdown
              nav
              isOpen={dropdownOpen}
              className='nav-item btn-group dropup profile-user-dropdown'
              toggle={toggle}
            >
              <DropdownToggle className='nav-link mb-2' tag='a'>
                <img
                  src={avatar1}
                  alt=''
                  className='profile-user rounded-circle'
                />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    toggleTab('profile');
                  }}
                >
                  Profile{' '}
                  <i className='ri-profile-line float-end text-muted'></i>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    toggleTab('settings');
                  }}
                >
                  Setting{' '}
                  <i className='ri-settings-3-line float-end text-muted'></i>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='/logout'>
                  Log out{' '}
                  <i className='ri-logout-circle-r-line float-end text-muted'></i>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
        {/* Side menu user */}
      </div>
    </React.Fragment>
  );
};

// export default LeftSidebarMenu;
//connect(전역데이터속성을props하위속성으로 넣어주는 함수호출, {props의 하위함수로 액션함수룰 추가해주는설정})
export default connect(null, { setActiveTab })(LeftSidebarMenu);
