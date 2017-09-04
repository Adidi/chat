import { $ } from './utils/dom';

const chatPanel = $('chatPanel');

export const addLine = html => {
    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('line')
    chatPanel.appendChild(div);
    chatPanel.scrollTop = chatPanel.scrollHeight;
};

export const writeInfo = text => {
    addLine(`<div class="info">${text}</div>`);
};

export const joinUserMsg = name => {
    writeInfo(`${name} has joined the room.`);
};

export const leaveUserMsg = (name, leaveChat) => {
    const entity = leaveChat ? 'chat' : 'room';
    writeInfo(`${name} has left the ${entity}...`);
};

export const addMsg = (user,msg) => {
    const { name, color } = user; 
    addLine(`<div class="msg"><span style="color:${color}">${name}</span>: ${msg}</div>`);
}