console.log('the print.js module has loaded! see the network tab in dev tools');

export default  function print(text) {
    console.log(text);
    console.log(`BUtton clicked: here is some ${text}`);
}