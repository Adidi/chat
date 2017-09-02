import { init } from './socket';
import { $ } from './utils/dom';

import '../scss/main.scss';

document.getElementById('btnStart').addEventListener('click', () => {
    const nickName = $('txtNick').value;
    const loginBox = $('loginBox');
    const chatBox = $('chatBox');

    loginBox.style.display = 'none';
    chatBox.style.display = 'flex';

    init(nickName);
});
