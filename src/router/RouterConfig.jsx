/* eslint-disable array-callback-return */
import React, { Component, Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import routes from "./index";

import { CacheRoute, CacheSwitch } from "react-router-cache-route";
// import routes from "./index";
class RouterConfig extends Component {
  renderRoutes = () => {
    let routeArr = [];
    routes.map((el) => {
      routeArr.push(
        <CacheRoute
          key={el.path}
          exact={el.exact}
          path={el.path}
          render={(props) => <el.component {...props} />}
        />
      );
      if (el.routes) {
        el.routes.map((el) => {
          console.log(el.component);
          routeArr.push(
            <Route
              key={el.path}
              exact={el.exact}
              path={el.path}
              render={(props) => <el.component {...props} />}
            />
          );
        });
      }
    });
    return routeArr;
  };
  render() {
    return (
      <Suspense fallback={<div>.....</div>}>
        <Router>
          <CacheSwitch>{this.renderRoutes()}</CacheSwitch>
        </Router>
      </Suspense>
    );
  }
}
// class RouterConfig extends Component {
//   render() {
//     return (
//       <Suspense fallback={<div>.....</div>}>
//         <Router>
//           <Switch>
//             {/*
//                     <Route path="" render={()=><Cmp></Cmp>}></Route>
//                   */}
//             {routes.map((route) => {
//               return (
//                 <Route
//                   key={route.path}
//                   exact={route.exact}
//                   path={route.path}
//                   render={(props) => (
//                     <route.component
//                       {...props}
//                       {...route.routes}
//                     ></route.component>
//                   )}
//                 ></Route>
//               );
//             })}
//           </Switch>
//         </Router>
//       </Suspense>
//     );
//   }
// }

export default RouterConfig;
