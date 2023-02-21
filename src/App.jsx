import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Routes, Route, createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { ROUTES } from './main'

function NavList({ routes }) {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  console.log(routes)
  return (
    <nav>
      <ul>
        {
          routes?.map(route => {
            return (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {route.label}
                </NavLink>
                {
                  route.children && <NavList routes={route.children} />
                }
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

const renderRoute = (route, depth) => {
  if (depth === 0) {
    return <Route path={route.path} element={<Navigate to="/context_provide_pattern/bad-example" replace={true} />} />
  }
  if (!route.children) {
    return <Route path={route.path} element={route.element} />
  }
  return (
    <>
      {
        route.children.map(child => {
          return <Route key={child.path} path={child.path} element={child.element} />
        })
      }
    </>
  )
}
export default function App() {
  return (
    <div>
      <NavList routes={ROUTES} />
      <Routes>
        {renderRoute(ROUTES)}
      </Routes>
      <Outlet></Outlet>
    </div>
  )
}


