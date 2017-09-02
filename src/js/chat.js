import { $ } from './utils/dom';

const chatPanel = $('chatPanel');

export const addLine = html => {
    const div = document.createElement('div');
    div.innerHTML = html;
    chatPanel.appendChild(div);
};

export const writeInfo = text => {
    addLine(`<div class="info">${text}</div>`);
};

export const joinUserMsg = name => {
    writeInfo(`${name} has joined the chat...`);
};

export const leaveUserMsg = name => {
    writeInfo(`${name} has left the chat...`);
};