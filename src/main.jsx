import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRouteError, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import NormalPattern from './1-normal-pattern/task-app'
import HocPattern from './2-hoc-pattern/task-app'
import RenderPropsPattern from './3-render-props-pattern/task-app'
import CompoundComponentPattern from './4-compound-component-pattern/task-app'

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/normal_pattern',
        element: <NormalPattern />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/hoc_pattern',
        element: <HocPattern />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/render_props_pattern',
        element: <RenderPropsPattern />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/compound_component_pattern',
        element: <CompoundComponentPattern />,
        errorElement: <ErrorPage />,
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
