import React, {Component} from 'react';
import TopMenuLogReg from './TopMenuLogReg';
import TopMenuNav from './TopMenuNav';

class TopMenu extends Component {
    render() {
        return (
            <div className={'TopMenu'}>
                <TopMenuLogReg/>
                <TopMenuNav/>
            </div>

        );
    }
}

export default TopMenu;