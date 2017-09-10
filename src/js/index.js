import { init, sendMsg } from './socket';
import { $ } from './utils/dom';
import './tabs';

import '../scss/main.scss';

const btnStart = $('btnStart');
const txtName = $('txtName');

const startChat = () => {
    const name = txtName.value;
    const loginBox = $('loginBox');
    const chatBox = $('chatBox');

    loginBox.style.display = 'none';
    chatBox.style.display = 'flex';

    init(name);
}

btnStart.addEventListener('click', startChat);
txtName.addEventListener('keydown', e => {
    if(e.keyCode === 13){
        startChat();
    }
})

const submitMsg = () => {
    const msg = txtMsg.value;
    if(msg){
       sendMsg(msg);
       txtMsg.value = '';
    }
};

const btnSend = $('btnSend');
const txtMsg = $('txtMsg');
btnSend.addEventListener('click', submitMsg);
txtMsg.addEventListener('keydown', e => {
    if(e.keyCode === 13){
        submitMsg();
    }
})
