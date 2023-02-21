import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Routes, Route, createBrowserRouter, Navigate } from 'react-router-dom'
import NormalPattern from './1-normal-pattern/task-app'
import HocPattern from './2-hoc-pattern/task-app'
import RenderPropsPattern from './3-render-props-pattern/task-app'
import CompoundComponentPattern from './4-compound-component-pattern/task-app'

import './App.css'

const routes = [
  {
    path: '/normal_pattern',
    label: 'Normal Pattern',
    element: <NormalPattern />
  },
  {
    path: '/hoc_pattern',
    label: 'HOC Pattern',
    element: <HocPattern />
  },
  {
    path: '/render_props_pattern',
    label: 'Render Props Pattern',
    element: <RenderPropsPattern />
  },
  {
    path: '/compound_component_pattern',
    label: 'Compound Component Pattern'
  },
  {
    path: '/control_props_pattern',
    label: 'Control Props Pattern'
  },
  {
    path: '/custom_hook_pattern',
    label: 'Custom Hook Pattern'
  },
]

function NavList() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        {
          routes.map(route => {
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
              </li>
            )
          })
        }
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
        <Route path='/render_props_pattern' element={<RenderPropsPattern />} />
        <Route path='/compound_component_pattern' element={<CompoundComponentPattern />} />
      </Routes>
    </div>
  )
}


