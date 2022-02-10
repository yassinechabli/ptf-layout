import React from "react";
import {
    Routes as ReactRouterRoutes,
    Route,
} from "react-router-dom";
import routes from "./routes";
const Routes = () => {

  return (
    <>
          <ReactRouterRoutes>
            {routes.map(({component:Page, path}) => Page ? (
                <Route
                  key={path}
                  path={path}
                  element={<Page/>}
                  children={(props: any)=> <Page {...props}/>}
                />
              ) : null)}
          </ReactRouterRoutes>

    </>
  );
};

export default Routes;
