import React                                                    from "react";
import Route                                                    from "react-router/lib/Route";
import IndexRoute                                               from "react-router/lib/IndexRoute";
import Router                                                   from "react-router/lib/Router";
import Redirect                                                 from "react-router/lib/Redirect";

//Views + Headers
import HomeView                                              from "~/views/HomeView/HomeView";

export default (history, store) => {

    return (
        <Router history={history}>
            <Route name="Start Page" staticName={true} path="/"  component={HomeView} />
        </Router>
    );
};
