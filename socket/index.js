let io;
const users = {};

const addUser = (id,name) => {
    users[id] = {
        id,
        name,
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    };
    return users[id];
}

const removeUser = id => {
    delete users[id];
};

const initialize = (socketIO) => {
    io = socketIO;

    io.on('connection', socket => { 
        socket.on('join', name => {
            const user = addUser(socket.id, name);
            socket.emit('initUsers', users);
            socket.broadcast.emit('joinUser', user);
        });

        socket.on('disconnect', () => {
            io.emit('disconnectUser', users[socket.id]);
            removeUser(socket.id);
        });

        socket.on('message', msg => {
            const user = users[socket.id];
            io.send(user, msg);
        });
    }); 
};

module.exports = initialize;