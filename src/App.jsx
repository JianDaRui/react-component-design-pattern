import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Routes, Route, createBrowserRouter, useNavigate } from 'react-router-dom'
import './App.css'
import NormalPattern from './1-normal-pattern/task-app'

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/normal_pattern')
  }, [])
  return (
    'Home'
  )
}

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
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
      </ul>
    </nav>
  );
}
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <NavList />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/normal_pattern' element={<NormalPattern />} />
      </Routes>
    </div>
  )
}


