import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Routes, Route, createBrowserRouter, Navigate } from 'react-router-dom'
import NormalPattern from './1-normal-pattern/task-app'
import HocPattern from './2-hoc-pattern/task-app'
import './App.css'

function NavList() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="normal_pattern"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Normal Pattern
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hoc_pattern"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            HOC Pattern
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div>
      <NavList />
      <Routes>
        <Route path='/' element={<Navigate to="/normal_pattern" replace={true} />} />
        <Route path='/normal_pattern' element={<NormalPattern />} />
        <Route path='/hoc_pattern' element={<HocPattern />} />
      </Routes>
    </div>
  )
}


