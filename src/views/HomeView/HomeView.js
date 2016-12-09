import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";

import "./HomeView.scss";

class HomeView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="home-view-container">
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export default HomeView;
