import { $ } from './utils/dom';
import { joinRoom } from './socket';

const roomsPanel = $('roomsPanel');

const addRoom = room => {
    const li = document.createElement('li');
    li.id = room;
    li.innerHTML = room;
    li.addEventListener('click', () => {
        joinRoom(room);
    });
    roomsPanel.appendChild(li);
}

export const clearRooms = () => roomsPanel.innerHTML = '';

export const initRooms = rooms => {
    clearRooms();
    rooms.forEach(room => addRoom(room));
};
