import React, {Component} from 'react';
import {Link} from 'react-scroll';

class HomeWhoWeHelpButton extends Component {
    render() {
        return (
                <Link activeClass="active"
                      to={'ScrollRais'}
                      smooth={true}
                      duration={250}
                      containerId="containerElement"
                      style={{ display: 'inline-block', margin: '20px' }}>
                    {this.props.title}
                </Link>
        );
    }
}

export default HomeWhoWeHelpButton;