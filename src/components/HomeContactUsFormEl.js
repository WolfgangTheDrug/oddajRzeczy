import React, {Component} from 'react';

class HomeContactUsFormEl extends Component {
    render() {
        return (
            <p className="input">
                <label>Wpisz {this.props.label}</label>
                {this.props.type === 'input'? <input placeholder={'Wpisz '+this.props.label}/>:<textarea rows="4" placeholder={this.props.placeholder}/>}
            </p>
        );
    }
}

export default HomeContactUsFormEl;