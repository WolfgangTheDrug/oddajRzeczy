import React, {Component} from 'react';

class HomeSimpleStepsEl extends Component {
    render() {
        return (
            <div className={'StepContainer'}>
                <img src={this.props.imgSrc} alt="" className={'StepImg'}/>
                <p className="StepTitle">{this.props.title}</p>
                <div className="Line"/>
                <p className="StepDescr">{this.props.description}</p>
            </div>
        );
    }
}

export default HomeSimpleStepsEl;