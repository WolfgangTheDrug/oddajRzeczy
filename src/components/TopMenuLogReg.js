import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TopMenuLogReg extends Component {
    render() {
        return (
            <div className={'TopMenuLogReg'}>
                <Link to={'/LogIn'} className={'TopBtn'}>Zaloguj się</Link>
                <Link to={'/Register'} className={'TopBtn'}>Zarejestruj się</Link> {/*dodać adres?*/}
            </div>
        );
    }
}

export default TopMenuLogReg;