import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthStatus } from '../../const';
import IOffer from '../../interfaces/IOffer';

import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import Favourites from '../../pages/favourites/favourites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoot from '../private-root/private-root';

type AppProps = {
  offers: IOffer[],
  offersFavourites: IOffer[]
};

function App({ offers, offersFavourites }: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Main offers={offers} />} />
          <Route path="favourites" element={
            <PrivateRoot authStatus={AuthStatus.Auth}>
              <Favourites offersFavourites={offersFavourites} />
            </PrivateRoot>
          }
          />
          <Route path="offer/:id" element={<Room />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
