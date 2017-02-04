import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";

import "./ConsultantDetailView.scss";

class ConsultantDetailView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="consultant-detail-view-container">
                <h1>Hello Consultant Details view</h1>
            </div>
        );
    }
}

export default ConsultantDetailView;
