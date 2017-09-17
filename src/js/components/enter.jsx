import React from 'react';

class Enter extends React.PureComponent {

    start = () => {
        const { onClickStart } = this.props;
        onClickStart(this.input.value.trim());
    }

    render() {
        return (
            <div className="login-box">
                Name:<input dir="auto" ref={r => this.input = r} onKeyDown={ e => { 
                        if(e.keyCode === 13){ 
                            this. start(); 
                        }
                    }} />
                <button onClick={this.start}>Start Chat</button>
            </div>
        );
    }
}

export default Enter;