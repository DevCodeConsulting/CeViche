import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";

import "./ResumeView.scss";

class CvView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="cv-view-container">
                <h1>Resume view</h1>
            </div>
        );
    }
}

export default CvView;
