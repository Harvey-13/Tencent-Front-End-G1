import { RouteObject } from 'react-router-dom';
import Login from '@view/Login/Login';
const loginRouter: RouteObject = {
  path: '/login',
  element: Login(),
  //children: sideBarRouter,
};

export default loginRouter;
