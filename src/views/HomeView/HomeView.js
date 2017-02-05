import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";
import LayoutComponent                                      from "../../components/LayoutComponent/LayoutComponent";
import "./HomeView.scss";

class HomeView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return (
            <LayoutComponent>
                <h1>Hello World!</h1>
            </LayoutComponent>
        );
    }
}

export default HomeView;
