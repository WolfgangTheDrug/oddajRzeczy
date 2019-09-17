import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContactUs from './HomeContactUs';
import {Element} from 'react-scroll';

class Home extends Component {
    render() {
        return (
            <div className={'Home'}>
                <HomeHeader/>

                <Element name={'Start'}>
                    <HomeThreeColumns/>
                </Element>
                <Element name={'WGO'}>
                    <HomeSimpleSteps/>
                </Element>
                <Element name={'AboutUs'}>
                    <HomeAboutUs/>
                </Element>
                <Element name={'Fund'}>
                    <HomeWhoWeHelp/>
                </Element>
                <Element name={'Contact'}>
                    <HomeContactUs/>
                </Element>
            </div>
        );
    }
}

export default Home;