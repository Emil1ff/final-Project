import { SET_MENU_DATA } from '../actions/actions';

const initialState = {
  menuData: null,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_DATA:
      return {
        ...state,
        menuData: action.payload,
      };
    default:
      return state;
  }
};
