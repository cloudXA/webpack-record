import _ from 'lodash';
import { cube } from './math.js';
import './style.css';

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack！hello world',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());

