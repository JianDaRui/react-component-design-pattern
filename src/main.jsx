import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, useRouteError, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import NormalPattern from './1-normal-pattern/task-app'
import HocPattern from './2-hoc-pattern/task-app'
import RenderPropsPattern from './3-render-props-pattern/task-app'
import CompoundComponentPattern from './4-compound-component-pattern/task-app'
import {
  ParentBad,
  WrapperParent,
  Parent02,
  Parent03
} from './9-context-provide-pattern'

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

export const ROUTES = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '/normal_pattern',
      //   label: 'Normal Pattern',
      //   element: <NormalPattern />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: '/hoc_pattern',
      //   label: 'HOC Pattern',
      //   element: <HocPattern />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: '/render_props_pattern',
      //   label: 'Render Props Pattern',
      //   element: <RenderPropsPattern />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: '/compound_component_pattern',
      //   label: 'Compound Component Pattern',
      //   element: <CompoundComponentPattern />,
      //   errorElement: <ErrorPage />,
      // },
      {
        path: '/context_provide_pattern',
        label: 'Context Provide Pattern',
        element: <Outlet />,
        children: [
          {
            path: '/context_provide_pattern/bad-example',
            label: 'Bad Example',
            element: <ParentBad />,
          },
          {
            path: '/context_provide_pattern/good-example-01',
            label: 'Good Example 1 —— Render Props',
            element: <WrapperParent />,
          },
          {
            path: '/context_provide_pattern/good-example-02',
            label: 'Good Example 2——useMemo',
            element: <Parent02 />,
          },
          {
            path: '/context_provide_pattern/good-example-03',
            label: 'Good Example 3——React.memo',
            element: <Parent03 />,
          }
        ]
      },
    ]
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(ROUTES)}> </RouterProvider>
  </React.StrictMode>,
)
