import React, { Component } from 'react';
import Enter from './enter';
import Chat from './chat';

class App extends Component {

    constructor(){
        super();
        this.state = {
            name: 'adiel'
        };
    }

    onClickStart = name => {
        console.log(name);
        this.setState({ name });
    }
   
    render() {
        const { name } = this.state;

        return (
            <div className="container">
                {!name && <Enter onClickStart={this.onClickStart} />}
                {name && <Chat />}
            </div>
        );
    }
}

export default App;