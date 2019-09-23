import React, {Component} from 'react';

class HomeContactUsForm extends Component {
    render() {
        return (
            <form>
                <label>Wpisz swoje imię //50% szerokości rodzica
                    <input type="text"/>
                </label>
                <label>Wpisz swój email //50% szerokości rodzica
                    <input type="text"/>
                </label>
                <label>Napisz swoją wiadomość //100% szerokości rodzica
                    <textarea/>
                </label>
                <button>Wyślij</button> // do prawej strony
            </form>
        );
    }
}

export default HomeContactUsForm;