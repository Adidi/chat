import { init, sendMsg } from './socket';
import { $ } from './utils/dom';

import '../scss/main.scss';

const btnStart = $('btnStart');
const txtNick = $('txtNick');

const startChat = () => {
    const nickName = txtNick.value;
    const loginBox = $('loginBox');
    const chatBox = $('chatBox');

    loginBox.style.display = 'none';
    chatBox.style.display = 'flex';

    init(nickName);
}

btnStart.addEventListener('click', startChat);
txtNick.addEventListener('keydown', e => {
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
