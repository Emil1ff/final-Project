import { SET_MENU_DATA, MenuData, SetMenuDataAction } from '../../features/actions/menuAction';

export interface MenuState {
  menuData: MenuData | null;
}

const initialState: MenuState = {
  menuData: null,
};

export const menuReducer = (state = initialState, action: SetMenuDataAction): MenuState => {
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
