import React                                                    from "react";
import Route                                                    from "react-router/lib/Route";
import IndexRoute                                               from "react-router/lib/IndexRoute";
import Router                                                   from "react-router/lib/Router";
import Redirect                                                 from "react-router/lib/Redirect";

//Views + Headers
import HomeView                                                 from "~/views/HomeView/HomeView";
import ConsultantListView                                      from "~/views/ConsultantListView/ConsultantListView";
import ConsultantDetailView                                     from "~/views/ConsultantDetailView/ConsultantDetailView";
import ResumeView                                               from "~/views/ResumeView/ResumeView";

export default (history, store) => {

    return (
        <Router history={history}>
            <Route name="Start Page" staticName={true} path="/"  component={HomeView} />

            <Route name="Consultants" staticName={true} path="/consultants"  component={ConsultantListView} />
            <Route name="Consultant Details" staticName={true} path="/consultant-details/:consultant"  component={ConsultantDetailView} />
            <Route name="Resume" staticName={true} path="/resume/:consultant"  component={ResumeView} />
        </Router>
    );
};
