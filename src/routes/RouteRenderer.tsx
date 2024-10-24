import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import { DefaultUserLayout, ProtectedLayout } from '../layout';
import routes from '.';

const RouteRenderer = () => {
  return (
    <AuthProvider>
      <Routes>
        {
          routes.map((route, index) => {
            const element = route?.isAuth ?
              <ProtectedLayout roles={route.roles}>
                {route.element}
              </ProtectedLayout> :
              <DefaultUserLayout >
                {route.element}
              </DefaultUserLayout>

            return (
              <Route key={index} path={route.path} element={element} />
            )
          })
        };

      </Routes>
    </AuthProvider >
  )
}

export default RouteRenderer