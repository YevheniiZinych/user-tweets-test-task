import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavBar } from './NavBar/NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
