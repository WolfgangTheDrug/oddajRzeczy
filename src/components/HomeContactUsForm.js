import React, {Component} from 'react';
import HomeContactUsFormEl from './HomeContactUsFormEl';

class HomeContactUsForm extends Component {
    render() {
        return (
            <form className={'ContactUsForm'}>
                <div className="inputsDiv">
                    <HomeContactUsFormEl label={'swoje imię'} type={'input'}/>
                    <HomeContactUsFormEl label={'swój email'} type={'input'}/>
                </div>
                <div className="textareaDiv">
                    <HomeContactUsFormEl label={'swoją wiadomość'} type={'textarea'} placeholder={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                                                                                                  'Ab blanditiis cupiditate debitis ducimus, enim eos et eum fuga illo in, ' +
                                                                                                  'ipsa mollitia neque odio officia pariatur quis recusandae sit veritatis?'}/>
                </div>
                <button>Wyślij</button>
            </form>
        );
    }
}

export default HomeContactUsForm;