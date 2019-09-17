import React, {Component} from 'react';
import Decoration from '../assests/Decoration.svg';
import TopMenu from './TopMenu';
import HomeHero from '../assests/Home-Hero-Image.jpg'

class HomeHeader extends Component {
    render() {
        return (
            <header className={'HomeHeader'}>
                <img src={HomeHero} alt="" className={'HomeHero'}/>
                <div className={'HomeHeaderRight'}>
                    <TopMenu/>
                    <h1 className={'HeaderTitle'}>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w dobre ręce.</h1>
                    <img src={Decoration} alt="" className={'Decoration'}/>
                    <div className={'HeaderBtns'}>
                        <div className="HeaderBtn">oddaj rzeczy</div>
                        <div className="HeaderBtn">zorganizuj zbiórkę</div>
                    </div>
                </div>

            </header>
        );
    }
}

export default HomeHeader;