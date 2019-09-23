import React, {Component} from 'react';
import SectionTitle from './SectionTitle';
import Btn from './HomeWhoWeHelpButton';

class HomeWhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: true,
            activeListElement: true,
            list: [0,0,1]
        };
    }

    toggleClass = (el) => {
        this.setState({ activeButton: !el});
    };

    toggleListElement = (n) => {
        const currentState = this.state.activeListElement;
        this.setState({ active: !currentState });
    }; //o chuj mi tu chodzi?

    render() {
        return (
            <section className={'HomeWhoWeHelp'}>
                <SectionTitle title={'Komu pomagamy?'}/>
                <ul className={'HomeWhoWeHelpButtons'}>
                    <li onClick={() => this.toggleClass(!!this.state.list[0])} className={(this.state.activeButton? 'active ':'') + 'HomeWhoWeHelpButton'}><Btn title={'Fundacjom'}/></li>
                    <li onClick={() => this.toggleClass(!!this.state.list[1])} className={(this.state.activeButton? 'active ':'') + 'HomeWhoWeHelpButton'}><Btn title={'Organizacjom pozarządowym'}/></li>
                    <li onClick={() => this.toggleClass(!!this.state.list[2])} className={(this.state.activeButton? 'active ':'') + 'HomeWhoWeHelpButton'}><Btn title={'Lokalnym' +
                    ' zbiórkom'} /></li>


                </ul>
                <ul className={'ScrollContainer'} id={'containerElement'} >
                    <li className={'ScrollElement'} >
                        <p>123Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab amet aperiam at aut autem corporis debitis deserunt,
                            facere iste molestiae mollitia nihil nisi qui quia quos
                            repellendus sapiente, veritatis voluptate.</p>
                    </li>
                    <li className={'ScrollElement'}>
                        <p>456Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab amet aperiam at aut autem corporis debitis deserunt,
                            facere iste molestiae mollitia nihil nisi qui quia quos
                            repellendus sapiente, veritatis voluptate.</p>
                    </li>
                    <li className={'ScrollElement'}>
                        <p>789Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab amet aperiam at aut autem corporis debitis deserunt,
                            facere iste molestiae mollitia nihil nisi qui quia quos
                            repellendus sapiente, veritatis voluptate.</p>
                    </li>
                </ul>
            </section>
        );
    }
}

export default HomeWhoWeHelp;