import { $ } from './utils/dom';
import { isCurrentUser } from './socket';

const chatPanel = $('chatPanel');

export const addLine = (html, id) => {
    const div = document.createElement('div');
    div.dir = 'auto';
    div.innerHTML = html;
    div.classList.add('line');
    const { height } = chatPanel.getBoundingClientRect();
    const setScroll = chatPanel.scrollHeight - chatPanel.scrollTop === height;
    chatPanel.appendChild(div);
    // if the user didnt touch the scroller (its on the bottom) or this user
    // sends the message - then set the scroll top to be most bottom
    if(setScroll || isCurrentUser(id)){
        chatPanel.scrollTop = chatPanel.scrollHeight;
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