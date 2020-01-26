// import _ from 'lodash';

function getComponent() {
    return import(/* webpackChunkName: "lodash"*/ 'lodash').then(({ default: _}) => {
        var element = document.createElement('div');

        element.innerHTML = _.join(['hello', 'webpack'], ' ');

        return element;
    }).catch(error => 'an error occurred while loading the component');
}

// TODO:  配置与asny loader相关的依赖项
// 由于import()会返回一个promise，因此他可以和async函数一起使用，
// asny function getComponent() {
//     var element = document.createElement('div');
//     const { default: _ } = await import(/** webpackChunName: 'lodash' */ 'lodash');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }





getComponent().then(component => {
    document.body.appendChild(component);
})

