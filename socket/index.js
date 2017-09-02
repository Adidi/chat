let io;
const users = {};

const addUser = (id,name) => {
    users[id] = {id,name};
    return users[id];
}

const removeUser = id => {
    delete users[id];
};

const initialize = (socketIO) => {
    io = socketIO;
    console.log(users);

    io.on('connection', socket => { 
        socket.on('join', nickName => {
            const user = addUser(socket.id, nickName);
            socket.emit('initUsers', users);
            socket.broadcast.emit('joinUser', user);
        });

        socket.on('disconnect', () => {
            io.emit('disconnectUser', users[socket.id]);
            removeUser(socket.id);
        });
    }); 
};

module.exports = initialize;