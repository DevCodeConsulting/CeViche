import React                                                    from "react";
import Route                                                    from "react-router/lib/Route";
import IndexRoute                                               from "react-router/lib/IndexRoute";
import Router                                                   from "react-router/lib/Router";
import Redirect                                                 from "react-router/lib/Redirect";

//Views + Headers
import HomeView                                                 from "~/views/HomeView/HomeView";
import ConsultantsListView                                      from "~/views/ConsultantsListView/ConsultantsListView";
import ConsultantDetailView                                     from "~/views/ConsultantDetailView/ConsultantDetailView";
import CvView                                                   from "~/views/CvView/CvView";

export default (history, store) => {

    return (
        <Router history={history}>
            <Route name="Start Page" staticName={true} path="/"  component={HomeView} />

            <Route name="Consultants" staticName={true} path="/consultants"  component={ConsultantsListView} />
            <Route name="Consultant Details" staticName={true} path="/consultant-details/:consultant"  component={ConsultantDetailView} />
            <Route name="CV" staticName={true} path="/cv/:consultant"  component={CvView} />
        </Router>
    );
};
