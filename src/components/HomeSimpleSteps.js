import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Decoration from "../assests/Decoration.svg";
import HomeSimpleStepsEl from './HomeSimpleStepsEl';
import icon1 from '../assests/Icon-1.svg';
import icon2 from '../assests/Icon-2.svg';
import icon3 from '../assests/Icon-3.svg';
import icon4 from '../assests/Icon-4.svg';
import SectionTitle from './SectionTitle';

class HomeSimpleSteps extends Component {
    render() {
        return (
            <div className={'HomeSimpleSteps'}>
                <SectionTitle title={'Wystarczą 4 proste kroki'}/>
                <div className="HomeSimpleStepsBg">
                    <HomeSimpleStepsEl imgSrc={icon1} title={'Wybierz rzeczy'} description={'ubrania, zabawki, sprzęt i inne'}/>
                    <HomeSimpleStepsEl imgSrc={icon2} title={'Spakuj je'} description={'skorzystaj z worków na śmieci'}/>
                    <HomeSimpleStepsEl imgSrc={icon3} title={'Zdecyduj komu chcesz pomóc'} description={'wybierz zaufane miejsce'}/>
                    <HomeSimpleStepsEl imgSrc={icon4} title={'Zamów kuriera'} description={'kurier przyjedzie w dogodnym terminie'}/>
                </div>
                <div className={'HomeSimpleStepsBtn'}><Link to={'/Login'} className={'HomeSimpleStepsBtnTxt'}>Oddaj rzeczy</Link></div>
            </div>
        );
    }
}

export default HomeSimpleSteps;