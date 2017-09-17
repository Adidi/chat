import React from 'react';
import PropTypes from 'prop-types';
import ChatsPanel from './chats-panel';

class Chat extends React.PureComponent {
    static propTypes = {
        
    };

    constructor(){
        super();
        this.state = {
            messages: [],
            privateRooms: [],
            selectedChat: 'general'
        };
    }

    onClickTabChat = (e, id) => {
        this.setState({ selectedChat: id });
    }
    
    render() {
        const { selectedChat } = this.state; 

        return (
            <div className="chat-box">
                <div className="msg-panel">
                    <ChatsPanel selectedChat={selectedChat} onClickTabChat={this.onClickTabChat} />
                    <div className="input-box">
                        <input dir="auto" /><button>Send</button>
                    </div>
                </div>
                <div className="rooms-users-panel">
                    <ul className="users-panel"></ul>
                    <ul className="rooms-panel"></ul>
                </div>
            </div>
        );
    }
}

export default Chat;