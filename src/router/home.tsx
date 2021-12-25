import { RouteObject } from 'react-router-dom';
import Home from '@view/Home/HomeComp';
import sideBarRouter from './sideBar';
import React from 'react';
const homeRouter: RouteObject = {
  path: '/',
  element: <Home />,
  children: sideBarRouter,
};

export default homeRouter;
