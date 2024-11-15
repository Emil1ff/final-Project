export const SET_MENU_DATA = 'SET_MENU_DATA';

export const setMenuData = (data) => ({
  type: SET_MENU_DATA,
  payload: data,
});

export const fetchMenuData = () => async (dispatch) => {
  const data = {
    play: [
      { name: "Fortnite", image: "https://cms-assets.unrealengine.com/gdXF6wXaRzq7FLerxFmv" },
      { name: "Rocket League", image: "https://cms-assets.unrealengine.com/nvjfw8LwTbyiETLiJEeE" },
      { name: "Fall Guys", image: "https://cms-assets.unrealengine.com/1MdipiMMQeSDZe15gy3V" },
    ],
    discover: [
      { name: "Epic Games Store", image: "https://example.com/epicgamesstore.jpg" },
      { name: "Fab", image: "https://example.com/fab.jpg" },
      { name: "Sketchfab", image: "https://example.com/sketchfab.jpg" },
      { name: "ArtStation", image: "https://example.com/artstation.jpg" },
    ],
    create: [
      { name: "Unreal Engine", image: "https://example.com/unrealengine.jpg" },
      { name: "Create in Fortnite", image: "https://example.com/createinfortnite.jpg" },
      { name: "MetaHuman", image: "https://example.com/metahuman.jpg" },
      { name: "Twinmotion", image: "https://example.com/twinmotion.jpg" },
      { name: "RealityScan", image: "https://example.com/realityscan.jpg" },
      { name: "RealityCapture", image: "https://example.com/realitycapture.jpg" },
      { name: "Epic Online Services", image: "https://example.com/epiconlineservices.jpg" },
    ],
  };
  dispatch(setMenuData(data));
};
