import React from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';

import routes from '../../src/router/set-router';


function RenderSubRoute(route) {
    const isHaveChild = (route.childRoute && route.childRoute.length > 0);
    return (
        <Route {...route}>
            {
                isHaveChild && route.childRoute.map((child,index) => (
                    <RenderSubRoute key={child.path+index} {...child} />
                ))
            }
        </Route>
    )
}

function routers() {
    return (
       <HashRouter history={hashHistory}>
           <Switch>
               {
                   routes.map((route,index) => (
                       <RenderSubRoute {...route} key={index} />
                   ))
               }
           </Switch>
       </HashRouter>
    )
}

export default routers;