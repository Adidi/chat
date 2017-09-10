import { $ } from './utils/dom';
import { setCurrentChat } from './chat';

const tabsPanel = $('tabsPanel');
let currentTab = tabsPanel.children[0];

tabsPanel.addEventListener('click', e => {
    const tab = e.target;
    if(tab && tab.matches('.tab')){
        setCurrentChat(tab.getAttribute('data-id'));
        currentTab.classList.remove('selected');
        tab.classList.add('selected');
        currentTab = tab;
    }
});

