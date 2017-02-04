import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";

import "./ConsultantsListView.scss";

class ConsultantsListView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="consultant-list-view-container">
                <h1>Hello Consultant List View</h1>
            </div>
        );
    }
}

export default ConsultantsListView;
