import React                                                    from "react";
import { connect }                                              from "react-redux";
import shouldPureComponentUpdate                                from "react-pure-render/function";

import LayoutComponent                                          from "~/components/LayoutComponent/LayoutComponent"
import * as ResumeActions                                       from "~/actions/resumeActions";

import "./ResumeView.scss";

function mapStateToProperties(store) {
    return {
        consultantData: store.consultantReducer
    };
}

class ResumeView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);

        this._renderCompetences = this._renderCompetences.bind(this);
    }

    componentDidMount() {
        this.props.setResumeData();
    }

    _renderCompetences() {
        const competence = this.props.consultantData.competence

        return competence.map((comp, i) => {
            return (
                <div key={i}>
                    <h3>{comp.name}</h3>
                    <h3>{comp.skillevel}</h3>
                    <h3>{comp.category}</h3>
                </div>
            );
        })
    }

    render () {
        const { consultantData } = this.props;

        return (
            <LayoutComponent title={"Resume"}>
                <div className="resume-view-container">

                    <h1>Competence</h1>
                    { this._renderCompetences() }

                </div>
            </LayoutComponent>
        );
    }
}



export default connect(mapStateToProperties, ResumeActions)(ResumeView);
