import {JSDOM} from 'jsdom';

const dom = (new JSDOM(`<body id="root">HELLO</body>`)).window.document.querySelector('#root');


export function oprnRpcHtml(){
        return dom.window.document.documentElement.innerHTML
}




