import Main from '../../pages/main/main';
//import Room from '../../pages/room/room';

type AppProps = {
  placesFound: number,
};

function App({placesFound}: AppProps): JSX.Element {
  return <Main placesFound={placesFound} />;
  //return <Room />;
}

export default App;
