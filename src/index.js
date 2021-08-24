// import {add} from './math'
const {add} = require('./math')
function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}
add(11,22)
document.body.appendChild(component());