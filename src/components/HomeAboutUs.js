import React, {Component} from 'react';
import SectionTitle from './SectionTitle';
import People from '../assests/People.jpg';
import Signature from '../assests/Signature.svg';

class HomeAboutUs extends Component {
    render() {
        return (
            <section className={'HomeAboutUs'}>
                <div className={'HomeAboutUsLeft'}>
                    <SectionTitle title={'O nas'}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor dolorem doloremque doloribus ducimus.</p>
                    <img src={Signature} alt={''} className={'Signature'}/>
                </div>
                <img src={People} alt={''} className={'HomeAboutUsRight'}/>
            </section>
        );
    }
}

export default HomeAboutUs;