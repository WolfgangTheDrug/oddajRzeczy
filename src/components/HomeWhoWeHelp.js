import React, {Component} from 'react';
import {Element} from 'react-scroll';
import SectionTitle from './SectionTitle';
import Btn from './HomeWhoWeHelpButton';

class HomeWhoWeHelp extends Component {
    render() {
        return (
            <section className={'HomeWhoWeHelp'}>
                <SectionTitle title={'Komu pomagamy?'}/>
                <div className={'HomeWhoWeHelpButtons'}>
                    <Btn title={'Fundacjom'}/>
                    <Btn title={'Organizacjom pozarządowym'}/>
                    <Btn title={'Lokalnym zbiórkom'} />
                </div>
                <Element className={'ScrollContainer'} id={'containerElement'} >
                    <Element className={'ScrollElement'} name={'ScrollFund'} >
                        <p>123Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab amet aperiam at aut autem corporis debitis deserunt,
                            facere iste molestiae mollitia nihil nisi qui quia quos
                            repellendus sapiente, veritatis voluptate.</p>
                    </Element>
                    <Element className={'ScrollElement'} name={'ScrollOrg'}>
                        <p>456Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab amet aperiam at aut autem corporis debitis deserunt,
                            facere iste molestiae mollitia nihil nisi qui quia quos
                            repellendus sapiente, veritatis voluptate.</p>
                    </Element>
                    <Element className={'ScrollElement'} name={'ScrollRais'}>
                        <p>789Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab amet aperiam at aut autem corporis debitis deserunt,
                            facere iste molestiae mollitia nihil nisi qui quia quos
                            repellendus sapiente, veritatis voluptate.</p>
                    </Element>
                </Element>
            </section>
        );
    }
}

export default HomeWhoWeHelp;