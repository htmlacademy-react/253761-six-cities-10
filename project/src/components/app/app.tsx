import Main from '../../pages/main/main';
//import Room from '../../pages/room/room';
//import Favourites from '../../pages/favourites/favourites';
//import Login from '../../pages/login/login';

type AppProps = {
  placesFound: number,
};

function App({placesFound}: AppProps): JSX.Element {
  return <Main placesFound={placesFound} />;
  //return <Room />;
  //return <Favourites />;
  //return <Login />;
}

export default App;
