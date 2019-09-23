import React, {Component} from 'react';
import SectionTitle from "./SectionTitle";
import formImg from '../assests/Background-Contact-Form.jpg';
import HomeContactUsForm from './HomeContactUsForm';

class HomeContactUs extends Component {
    render() {
        return (
            <section className={'HomeContactUs'}>
                <div className="ContactUsLeftSide">
                    <img src={formImg} alt=""/>
                </div>
                <div className="ContactUsRightSide">
                    <SectionTitle title={'Skontaktuj się z nami'}/>
                    <HomeContactUsForm/>
                </div>

            </section>
        );
    }
}

export default HomeContactUs;