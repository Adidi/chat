
const rooms = {};

const addRoom = room => {
    rooms[room] = {
        users: {}
    };
};

addRoom('general');
addRoom('גייז שמנמנים');
addRoom('סטרייט בסטרייט');

const createUser = (id, name) => ({
    id,
    name,
    color: `#${Math.floor(Math.random()*16777215).toString(16)}`
});

const addUserToRoom = (room, ...rest) => {
    let user = rest[0];
    if(typeof(user) !== 'object'){
        const [ id, name ] = rest;
        user = createUser(id, name);
    }
    rooms[room].users[user.id] = user;
    return user;
};

const getRooms = () => Object.keys(rooms);

const getRoomUsers = room => rooms[room].users;

const getRoomUser = (room, id) => rooms[room].users[id];

const deleteUserFromRoom = (room, id) => {
    delete rooms[room].users[id];
};

module.exports = {
    addUserToRoom,
    getRooms,
    getRoomUsers,
    getRoomUser,
    deleteUserFromRoom
};