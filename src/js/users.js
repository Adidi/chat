import { $ } from './utils/dom';
import { joinUserMsg, leaveUserMsg } from './chat';

const usersPanel = $('usersPanel');


export const addUser = (user, notify = false) => {
    const { id, name } = user;
    const li = document.createElement('li');
    li.id = `user-${id}`;
    li.innerHTML = name;
    usersPanel.appendChild(li);
    if(notify){
        joinUserMsg(name);
    }
}

const clearUsers = () => usersPanel.innerHTML = '';

export const initUsers = users => {
    clearUsers();
    for(let id in users){
        const user = users[id];
        addUser(user)
    }
};

export const leaveRoom = (user, leaveChat = false) => {
    const { id, name } = user;
    const li = $(`user-${id}`);
    li.parentNode.removeChild(li);
    leaveUserMsg(name, leaveChat);
}