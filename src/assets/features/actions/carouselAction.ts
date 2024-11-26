export const FETCH_CAROUSEL_DATA = 'FETCH_CAROUSEL_DATA';

export interface CarouselItem {
    image: string;
    category: string;
    name: string;
    price: number;
}

export interface CarouselData {
    items: CarouselItem[];
}

export interface FetchCarouselDataAction {
    type: typeof FETCH_CAROUSEL_DATA;
    payload: CarouselData;
}

export const fetchCarouselData = () => (dispatch: (action: FetchCarouselDataAction) => void) => {
    const data: CarouselData = {
        items: [
            {
                image: 'https://cdn2.unrealengine.com/egs-lego-horizon-adventures-carousel-desktop-1920x1080-87c66bdf6f10.jpg?resize=1&w=1280&h=720&quality=medium',
                category: 'Base Game',
                name: 'Necroking',
                price: 3.29,
            },
            {
                image: 'https://cdn2.unrealengine.com/egs-lego-horizon-adventures-carousel-desktop-1920x1080-87c66bdf6f10.jpg?resize=1&w=1280&h=720&quality=medium',
                category: 'Base Game',
                name: 'Necroking',
                price: 3.29,
            },
            {
                image: 'https://cdn2.unrealengine.com/egs-lego-horizon-adventures-carousel-desktop-1920x1080-87c66bdf6f10.jpg?resize=1&w=1280&h=720&quality=medium',
                category: 'Base Game',
                name: 'Necroking',
                price: 3.29,
            },
            {
                image: 'https://cdn2.unrealengine.com/egs-lego-horizon-adventures-carousel-desktop-1920x1080-87c66bdf6f10.jpg?resize=1&w=1280&h=720&quality=medium',
                category: 'Base Game',
                name: 'Necroking',
                price: 3.29,
            },
            {
                image: 'https://cdn2.unrealengine.com/egs-lego-horizon-adventures-carousel-desktop-1920x1080-87c66bdf6f10.jpg?resize=1&w=1280&h=720&quality=medium',
                category: 'Base Game',
                name: 'Necroking',
                price: 3.29,
            },
        ],
    };

    dispatch({
        type: FETCH_CAROUSEL_DATA,
        payload: data,
    });
};
