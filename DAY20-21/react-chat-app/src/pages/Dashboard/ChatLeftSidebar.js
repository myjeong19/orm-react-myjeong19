import React from 'react';

import { TabContent, TabPane } from 'reactstrap';

import Profile from './Tabs/Profile';

import Chats from './Tabs/Chats';

import Groups from './Tabs/Groups';

import { connect } from 'react-redux';

import { setActiveTab } from '../../redux/actions';

const ChatLeftSidebar = props => {
  const activeTab = props.activeTab;
  //const activeTab = "profile"; //props.activeTab;
  //const activeTab = "chat";
  //const activeTab = "group";
  // const activeTab = "contacts";
  // const activeTab = "settings";

  return (
    <React.Fragment>
      <div className='chat-leftsidebar me-lg-1'>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='profile' id='pills-user'>
            <Profile />
          </TabPane>

          <TabPane tabId='chat' id='pills-chat'>
            <Chats recentChatList={props.recentChatList} />
          </TabPane>

          <TabPane tabId='group' id='pills-groups'>
            <Groups />
          </TabPane>

          {/* <TabPane tabId="contacts" id="pills-contacts">
            <Contacts />
          </TabPane>

          <TabPane tabId="settings" id="pills-setting">
            <Settings />
          </TabPane> */}
        </TabContent>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ...state.Layout,
  };
};

// export default ChatLeftSidebar;

export default connect(mapStateToProps, { setActiveTab })(ChatLeftSidebar);
