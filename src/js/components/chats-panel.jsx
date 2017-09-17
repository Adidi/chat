import React from 'react';
import Tabs, { Tab } from './tabs';

const ChatsPanel = ( { selectedChat, onClickTabChat }) => {
    return (
        <Tabs selectedId={selectedChat} onClickTab={onClickTabChat} >
            <Tab id="general" title="General">
                <div className="chat"></div>
            </Tab>
            <Tab id="pchat" title="Private Chat">
                <div className="chat"></div>
            </Tab>
        </Tabs>
    );
};

export default ChatsPanel;