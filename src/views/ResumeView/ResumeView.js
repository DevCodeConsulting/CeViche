import React                                                    from "react";
import { connect }                                              from "react-redux";
import shouldPureComponentUpdate                                from "react-pure-render/function";
import { generateRootLevelLink }                                from "~/utils/applicationHelpers.js";
import ReactTooltip                                             from 'react-tooltip'

import LayoutComponent                                          from "~/components/LayoutComponent/LayoutComponent"
import * as ResumeActions                                       from "~/actions/resumeActions";

import Chip                                                     from "material-ui/Chip";
import Avatar                                                   from 'material-ui/Avatar';

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
        const competence = this.props.consultantData.competence,
            styles = {
                chip: {
                  margin: 4,
                },
                wrapper: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    float: "left"
                },
            };

        return competence.map((comp, i) => {
            let skillColor = "#ccc";
            if(parseInt(comp.skillevel) > 4)
                skillColor = "#4CAF50";
            else if(parseInt(comp.skillevel) > 2)
                skillColor = "#81C784";
            return (
                <div style={styles.wrapper} key={i} data-tip={comp.category}>
                    <ReactTooltip place="right" effect="float"/>
                    <Chip style={styles.chip}>
                      <Avatar size={32} color={"#fff"} backgroundColor={skillColor}>
                        {comp.skillevel}
                      </Avatar>
                      {comp.name}
                    </Chip>
                </div>
            );
        })
    }

    render () {
        const { consultantData } = this.props;

        return (
            <LayoutComponent title={"Resume"}>
                <div className="resume-view-container">

                    <h2>{consultantData.person.name}</h2>
                    <p>{consultantData.person.summary}</p>
                    <img height="120" className="resume-profile-picture" src={generateRootLevelLink("/images/simon_solders.jpg")} />

                    <h2>Competence</h2>
                    { this._renderCompetences() }

                </div>
            </LayoutComponent>
        );
    }
}



export default connect(mapStateToProperties, ResumeActions)(ResumeView);
