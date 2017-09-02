import io from 'socket.io-client';
import { addUser, addUsers, removeUser } from './users';

export const init = nickName => {
    const socket = io();

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
};