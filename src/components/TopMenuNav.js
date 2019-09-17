import React, {Component} from 'react';
import {Link} from 'react-scroll';

class TopMenuNav extends Component {

    render() {
        return (
            <ul className={'TopMenuNav'}>
                <li><Link to={'Start'} smooth={true} offset={50} duration={1000}>Start</Link></li>
                <li><Link to={'WGO'} smooth={true} offset={50} duration={1000}>O co chodzi?</Link></li> {/*WGO --
                 What's Going On*/}
                <li><Link to={'AboutUs'} smooth={true} offset={50} duration={1000}>O nas</Link></li>
                <li><Link to={'Fund'} smooth={true} offset={50} duration={1000}>Fundacja i organizacje</Link></li>
                <li><Link to={'Contact'} smooth={true} offset={50} duration={1000}>Kontakt</Link></li>
            </ul>
        );
    }
}

export default TopMenuNav;