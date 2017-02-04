import React                                                                        from "react";
import shouldPureComponentUpdate                                                    from "react-pure-render/function";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import "./ConsultantsListView.scss";

class ConsultantsListView extends React.Component {
    constructor(...props) {
        super(...props);
        this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);

        this.state = {
            enableSelectAll: false,
            showCheckboxes: false
        }
    }

    render () {
        return (
            <div className="consultant-list-view-container">
                <h1>Hello Consultant List View</h1>
                <Table>
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Job title</TableHeaderColumn>
                        <TableHeaderColumn>Current contract</TableHeaderColumn>
                        <TableHeaderColumn>Contract ends</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody 
                        displayRowCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            <TableRowColumn>Simon Solders</TableRowColumn>
                            <TableRowColumn>Frontend developer</TableRowColumn>
                            <TableRowColumn>Ericsson</TableRowColumn>
                            <TableRowColumn>2017-04-01</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Fabian Östlund</TableRowColumn>
                            <TableRowColumn>Frontend developer</TableRowColumn>
                            <TableRowColumn>Ericsson</TableRowColumn>
                            <TableRowColumn>2017-06-15</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Martin Blodau</TableRowColumn>
                            <TableRowColumn>Frontend developer</TableRowColumn>
                            <TableRowColumn>Ooyala</TableRowColumn>
                            <TableRowColumn>2017-09-01</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Erik Wallin</TableRowColumn>
                            <TableRowColumn>System developer</TableRowColumn>
                            <TableRowColumn>Peas & Understanding</TableRowColumn>
                            <TableRowColumn>2018-01-01</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>            
            </div>
        );
    }
}

export default ConsultantsListView;
