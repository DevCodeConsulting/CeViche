import React                                                    from 'react';
import ReactDOM                                                 from 'react-dom';
import { Provider }                                             from "react-redux";
import createBrowserHistory                                     from "history/lib/createBrowserHistory";
import useRouterHistory                                         from "react-router/lib/useRouterHistory";
import { syncHistoryWithStore }                                 from "react-router-redux";
import makeRoutes                                               from "./infrastructure/routes";
import axios                                                    from "axios";

import configureStore                                           from './infrastructure/configureStore';
import injectTapEventPlugin                                     from "react-tap-event-plugin";

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: __BASENAME__
});

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/routes.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.__INITIAL_STATE__,
    store = configureStore(initialState, browserHistory),
    history = syncHistoryWithStore(browserHistory, store);

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Now that we have the Redux store, we can create our routes. We provide
// the store to the route definitions so that routes have access to it for
// hooks such as `onEnter`.
const routes = makeRoutes(history, store);

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById("root")
);
