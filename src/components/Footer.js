import React, {Component} from 'react';
import FooterSocMedDiv from "./FooterSocMedDiv";

class Footer extends Component {
    render() {
        return (
            <div className={'Footer'}>
                <span>Copyright of CodersLab</span>
                <FooterSocMedDiv/>
            </div>
        );
    }
}

export default Footer;