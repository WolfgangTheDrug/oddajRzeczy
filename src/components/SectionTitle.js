import React, {Component} from 'react';
import Decoration from '../assests/Decoration.svg'

class SectionTitle extends Component {
    render() {
        return (
            <div className={'SectionTitleComp'}> {/*oklasowany div*/}
            <h4 className={'SectionTitle'}>{this.props.title}</h4>
                <img src={Decoration} alt="" className="Decoration"/>
            </div>
        );
    }
}

export default SectionTitle;