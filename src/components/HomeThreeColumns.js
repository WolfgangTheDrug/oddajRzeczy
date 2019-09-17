import React, {Component} from 'react';
import HomeThreeColumnsStats from './HomeThreeColumnsStats';

class HomeThreeColumns extends Component {
    render() {
        return (
            <section className={'HomeThreeColumns'}>
                <HomeThreeColumnsStats number={10}
                                       title={'ODDANYCH WORKÓW'}
                                       description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
                <HomeThreeColumnsStats number={5}
                                       title={'WSPARTYCH ORGANIZACJI'}
                                       description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
                <HomeThreeColumnsStats number={7}
                                       title={'ZORGANIZOWANY ZBIÓREK'}
                                       description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
            </section>
        );
    }
}

export default HomeThreeColumns;