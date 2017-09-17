import io from 'socket.io-client';
import { addUser, initUsers, leaveRoom } from './users';
import { addMsg, writeInfo } from './chat';
import { initRooms } from './rooms';

let socket = null;

export const init = name => {
    socket = io();

    socket.on('connect', () => {
        joinRoom('general', name);   
    });

    socket.on('initChat', (rooms, users) => {
        initRooms(rooms);
        initUsers(users);
    });
    
    socket.on('joinUser', user => {
        addUser(user, true);
    });

    socket.on('leaveRoom', leaveRoom);

    socket.on('message', addMsg);
};

export const sendMsg = msg => {
    socket.send(msg);
}

export const joinRoom = (newRoom, name) => {
    socket.emit('joinRoom',newRoom, name, () => {
        writeInfo(`You joined room "${newRoom}"`);
    });
}

export const isCurrentUser = id => socket.id === id;