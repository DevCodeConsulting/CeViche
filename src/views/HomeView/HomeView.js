import React                                                    from "react";
import shouldPureComponentUpdate                                from "react-pure-render/function";
import LayoutComponent                                          from "../../components/LayoutComponent/LayoutComponent";
import "./HomeView.scss";
import AppBar from 'material-ui/AppBar';

class HomeView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    }

    render () {
        return <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
    }
}

export default () => (<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>)
