import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const SignInPage = Loadable(lazy(() => import('../views/authentication/SignIn')));
const SignUpPage = Loadable(lazy(() => import('../views/authentication/SignUp')));
const DashboardPage = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const PredictionPage = Loadable(lazy(() => import('../views/prediction/Prediction')));
const PortfolioPage = Loadable(lazy(() => import('../views/portfolio/Portfolio')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <DashboardPage /> },
      { path: '/prediction', exact: true, element: <PredictionPage /> },
      { path: '/portfolio', exact: true, element: <PortfolioPage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/sign-in', element: <SignInPage /> },
      { path: '/auth/sign-up', element: <SignUpPage /> },
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
