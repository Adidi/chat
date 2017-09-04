const rooms = require('./rooms');
let io;

const joinRoom = (room, socket, name) => {
    let user = null;
    if(socket.currentRoom){
        user = leaveRoom(socket);
    }
    socket.currentRoom = room;
    socket.join(room);
    const params = user ? [user] : [socket.id, name];
    user = rooms.addUserToRoom(room, ...params);

    socket.emit('initChat', rooms.getRooms(), rooms.getRoomUsers(room));
    socket.to(room).emit('joinUser', user);
};

const leaveRoom = (socket, leaveChat = false) => {
    user = rooms.getRoomUser(socket.currentRoom, socket.id);
    rooms.deleteUserFromRoom(socket.currentRoom, socket.id);
    socket.leave(socket.currentRoom);
    socket.to(socket.currentRoom).emit('leaveRoom', user, leaveChat);
    return user;
};

const initialize = (socketIO) => {
    io = socketIO;

    io.on('connection', socket => { 

        socket.on('joinRoom', (room, name, callback) => {
            if(socket.currentRoom && socket.currentRoom === room){
                return;
            }
            joinRoom(room, socket, name);
            callback();
        });

        socket.on('message', msg => {
            const user = rooms.getRoomUser(socket.currentRoom, socket.id);
            io.in(socket.currentRoom).send(user, msg);
        });


        socket.on('disconnect', () => {
            leaveRoom(socket, true);
        });
    }); 
};

module.exports = initialize;