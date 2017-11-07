import { result } from './reduce';

console.log(result);


const box = {
  name: 'foo',
};

console.log(Object.prototype.hasOwnProperty.call(box, 'name'));
