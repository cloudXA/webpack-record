import _ from 'lodash';
import Print from './print.js';

function getComponent() {
        var element = document.createElement('div');

        var button = document.createElement('button');
        var br = document.createElement('br');

        button.innerHTML = 'Click me and look at the console!';
        // button.onclick = Print.bind(null, 'webpack');


        element.innerHTML = _.join(['hello', 'webpack'], ' ');
        element.appendChild(br);
        element.appendChild(button);

        button.onclick = e => import(/* webpackChunkName:'print'*/ './print').then(module => {
            var print = module.default;

            print('你好 webpack');
        })

        return element;
}

document.body.appendChild(getComponent());

