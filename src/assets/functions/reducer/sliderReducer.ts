import { FETCH_SLIDER_DATA, SliderData, FetchSliderDataAction } from '../../features/actions/sliderAction';

export interface SliderState {
  sliderData: SliderData | null;
}

const initialState: SliderState = {
  sliderData: null,
};

export const sliderReducer = (state = initialState, action: FetchSliderDataAction): SliderState => {
  switch (action.type) {
    case FETCH_SLIDER_DATA:
      return {
        ...state,
        sliderData: action.payload,
      };
    default:
      return state;
  }
};
