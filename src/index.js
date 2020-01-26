import _ from 'lodash';

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack！hello world',
        '5 cubed is equal to ' 
    ].join('\n\n\n');

    return element;
}

document.body.appendChild(component());

