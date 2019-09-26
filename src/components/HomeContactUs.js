import React, {Component} from 'react';
import SectionTitle from "./SectionTitle";
import HomeContactUsForm from './HomeContactUsForm';

class HomeContactUs extends Component {
    render() {
        return (
            <section className={'HomeContactUs'}>
                <div className="ContactUsRightSide">
                    <SectionTitle title={'Skontaktuj się z nami'}/>
                    <HomeContactUsForm/>
                </div>
            </section>
        );
    }
}

export default HomeContactUs;