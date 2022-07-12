import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../const';

type PrivateRouteProps = {
  authStatus: AuthStatus,
  children: JSX.Element,
}

function PrivateRoot({authStatus, children}: PrivateRouteProps): JSX.Element {
  return authStatus === AuthStatus.Auth
    ? children
    : <Navigate to={'/login'} />;
}

export default PrivateRoot;
