import omit from 'lodash/omit';

import '../scss/main.scss';

window.addEventListener('DOMContentLoaded', () => {
    console.log('the dom is loaded');
    console.log(omit({a:1,b:2},'a'));
});
