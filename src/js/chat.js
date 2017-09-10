import { $ } from './utils/dom';
import { isCurrentUser } from './socket';

const chatsPanel = $('chatsPanel');
let currentChatPanel = chatsPanel.children[0];

export const addLine = (html, id) => {
    const div = document.createElement('div');
    div.dir = 'auto';
    div.innerHTML = html;
    div.classList.add('line');
    const { height } = chatsPanel.getBoundingClientRect();
    const setScroll = chatsPanel.scrollHeight - chatsPanel.scrollTop === height;
    currentChatPanel.appendChild(div);
    // if the user didnt touch the scroller (its on the bottom) or this user
    // sends the message - then set the scroll top to be most bottom
    if(setScroll || isCurrentUser(id)){
        chatsPanel.scrollTop = chatsPanel.scrollHeight;
    }
};

export const writeInfo = text => {
    addLine(`<div class="info">${text}</div>`);
};

export const joinUserMsg = name => {
    writeInfo(`${name} has joined the room.`);
};

export const leaveUserMsg = (name, leaveChat) => {
    const entity = leaveChat ? 'chat' : 'room';
    writeInfo(`${name} has left the ${entity}`);
};

export const addMsg = (user,msg) => {
    const { name, color } = user; 
    addLine(`<div class="msg"><span style="color:${color}">${name}</span>: ${msg}</div>`, user.id);
}

export const setCurrentChat = id => {
    const chat = $(`chat-${id}`);
    currentChatPanel.style.display = 'none';
    chat.style.display = 'block';

    currentChatPanel = chat;
};  