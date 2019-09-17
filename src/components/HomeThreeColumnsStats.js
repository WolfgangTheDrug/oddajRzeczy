import React, {Component} from 'react';

export default class HomeThreeColumnsStats extends Component {
    render() {
        return (
            <div className={'StatsContainer'}>
                <p className={'StatsNum'}>{this.props.number}</p>
                <p className={'StatsTitle'}>{this.props.title}</p>
                <p className={'StatsDescr'}>{this.props.description}</p>
            </div>
        );
    }
}

