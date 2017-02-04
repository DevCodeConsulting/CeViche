import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";

import LayoutComponent                                          from "~/components/LayoutComponent/LayoutComponent"

import "./ResumeView.scss";



class ResumeView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return (
            <LayoutComponent>
                <div className="resume-view-container">
                    <h1>Resume view</h1>
                </div>
            </LayoutComponent>
        );
    }
}

export default ResumeView;
