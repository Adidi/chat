import io from 'socket.io-client';
import { addUser, addUsers, removeUser } from './users';
import { addMsg } from './chat';

let socket = null;
export const init = nickName => {
    socket = io();

    socket.on('connect', data => {
        socket.emit('join', nickName);
    });

    socket.on('initUsers', users => {
        addUsers(users);
    })
    
    socket.on('joinUser', user => {
        addUser(user, true);
    });

    socket.on('disconnectUser', user => {
        removeUser(user);
    });

    socket.on('message', (user, msg) => {
        addMsg(user, msg);
    })
};

export const sendMsg = msg => {
    socket.send(msg);
}