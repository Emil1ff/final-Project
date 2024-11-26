import { FETCH_CAROUSEL_DATA, FetchCarouselDataAction, CarouselData } from '../../features/actions/carouselAction';

interface CarouselState {
    carouselData: CarouselData | null;
}

const initialState: CarouselState = {
    carouselData: null,
};

export const carouselReducer = (
    state = initialState,
    action: FetchCarouselDataAction
): CarouselState => {
    switch (action.type) {
        case FETCH_CAROUSEL_DATA:
            return { ...state, carouselData: action.payload };
        default:
            return state;
    }
};

export default carouselReducer;
