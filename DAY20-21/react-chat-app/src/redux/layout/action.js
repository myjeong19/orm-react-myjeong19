import {
  SET_ACTIVE_TAB,
  OPEN_USER_PROFILE_SIDEBAR,
  SET_LAYOUT_MODE,
} from '../../constants/actionTypes';

export const setActiveTab = tabId => ({
  type: SET_ACTIVE_TAB,
  payload: tabId,
});

export const openUserSidebar = () => ({
  type: OPEN_USER_PROFILE_SIDEBAR,
});

export const changeLayoutMode = layoutMode => ({
  type: SET_LAYOUT_MODE,
  payload: layoutMode,
});
